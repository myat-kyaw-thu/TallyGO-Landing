'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { createSupabaseClient } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Eye, EyeOff, CheckCircle, XCircle } from 'lucide-react'

function ResetPasswordForm() {
  const searchParams = useSearchParams()
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [validTokens, setValidTokens] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Extract tokens from URL (both search params and hash fragments)
  const [urlParams, setUrlParams] = useState<{
    accessToken: string | null
    refreshToken: string | null
    type: string | null
    error: string | null
    errorCode: string | null
    errorDescription: string | null
  }>({
    accessToken: null,
    refreshToken: null,
    type: null,
    error: null,
    errorCode: null,
    errorDescription: null
  })

  useEffect(() => {
    setMounted(true)
    
    if (typeof window !== 'undefined') {
      // Check URL search params first
      const searchAccessToken = searchParams.get('access_token')
      const searchRefreshToken = searchParams.get('refresh_token')
      const searchType = searchParams.get('type')
      
      // Check URL hash fragments for both success and error cases
      const hash = window.location.hash.substring(1) // Remove the #
      const hashParams = new URLSearchParams(hash)
      
      const hashAccessToken = hashParams.get('access_token')
      const hashRefreshToken = hashParams.get('refresh_token')
      const hashType = hashParams.get('type')
      const hashError = hashParams.get('error')
      const hashErrorCode = hashParams.get('error_code')
      const hashErrorDescription = hashParams.get('error_description')

      // Use search params first, then fall back to hash params
      const finalParams = {
        accessToken: searchAccessToken || hashAccessToken,
        refreshToken: searchRefreshToken || hashRefreshToken,
        type: searchType || hashType,
        error: hashError,
        errorCode: hashErrorCode,
        errorDescription: hashErrorDescription
      }

      setUrlParams(finalParams)

      // More flexible validation - check for recovery type OR valid tokens OR no explicit error
      const hasRecoveryType = finalParams.type === 'recovery'
      const hasTokens = finalParams.accessToken && finalParams.refreshToken
      const hasExplicitError = finalParams.error && finalParams.error !== 'null'
      
      // Check if we should show the reset form
      if (hasRecoveryType || hasTokens || !hasExplicitError) {
        // Additional check: if we have tokens, verify they're not obviously invalid
        if (hasTokens) {
          // Tokens look valid, proceed
          setValidTokens(true)
          setError('')
        } else if (hasRecoveryType) {
          // Recovery type without tokens - might be a valid flow, allow it
          setValidTokens(true)
          setError('')
        } else if (!hasExplicitError) {
          // No explicit error and no obvious invalid state - be permissive
          setValidTokens(true)
          setError('')
        } else {
          setValidTokens(false)
        }
      } else {
        // Only show errors if we have explicit error indicators
        let errorMessage = 'Invalid or expired reset link. Please request a new password reset.'
        
        if (finalParams.errorCode === 'otp_expired') {
          errorMessage = 'This password reset link has expired. Password reset links are only valid for 1 hour for security reasons. Please request a new password reset from the app.'
        } else if (finalParams.error === 'access_denied') {
          errorMessage = 'Access denied. This reset link may have been used already or is no longer valid. Please request a new password reset from the app.'
        } else if (finalParams.errorDescription) {
          errorMessage = decodeURIComponent(finalParams.errorDescription.replace(/\+/g, ' '))
        }
        
        setError(errorMessage)
        setValidTokens(false)
      }
    }
  }, [searchParams])

  const validatePassword = (password: string): string | null => {
    if (password.length < 8) {
      return 'Password must be at least 8 characters'
    }
    if (!/\d/.test(password)) {
      return 'Password must contain at least one number'
    }
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      // Validate passwords match
      if (newPassword !== confirmPassword) {
        setError("Passwords don't match")
        setLoading(false)
        return
      }

      // Validate password requirements
      const validationError = validatePassword(newPassword)
      if (validationError) {
        setError(validationError)
        setLoading(false)
        return
      }

      // Create Supabase client
      const supabase = createSupabaseClient()
      
      // Try to set session if we have tokens
      if (urlParams.accessToken && urlParams.refreshToken) {
        const { error: sessionError } = await supabase.auth.setSession({
          access_token: urlParams.accessToken,
          refresh_token: urlParams.refreshToken
        })

        if (sessionError) {
          console.warn('Session error (continuing anyway):', sessionError)
          // Don't return here - continue with password update attempt
        }
      }

      // Update the password - this will work if user is authenticated
      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword
      })

      if (updateError) {
        // If update fails, try to get current session and retry
        const { data: { session } } = await supabase.auth.getSession()
        if (session) {
          // User is authenticated, try again
          const { error: retryError } = await supabase.auth.updateUser({
            password: newPassword
          })
          
          if (retryError) {
            setError(retryError.message)
            setLoading(false)
            return
          }
        } else {
          setError('Session expired. Please request a new password reset link.')
          setLoading(false)
          return
        }
      }

      // Success!
      setSuccess('Password updated successfully! You can now sign in to the app with your new password.')
      setNewPassword('')
      setConfirmPassword('')
      
      // Clear URL parameters for security
      if (typeof window !== 'undefined') {
        window.history.replaceState({}, document.title, window.location.pathname)
      }
      
    } catch (error) {
      console.error('Password reset error:', error)
      setError('Failed to update password. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (!validTokens) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <XCircle className="mx-auto h-12 w-12 text-red-500" />
            <CardTitle className="text-2xl font-bold text-gray-900">Reset Link Issue</CardTitle>
            <CardDescription>
              There's an issue with this password reset link.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <XCircle className="h-4 w-4" />
              <AlertDescription>
                {error}
              </AlertDescription>
            </Alert>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">What to do next:</h3>
              <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                <li>Open the TallyGO mobile app</li>
                <li>Go to the login screen</li>
                <li>Tap "Forgot Password?"</li>
                <li>Enter your email address</li>
                <li>Check your email for a new reset link</li>
                <li>Use the new link within 1 hour</li>
              </ol>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Password reset links expire after 1 hour for security reasons.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
            <CardTitle className="text-2xl font-bold text-gray-900">Password Updated!</CardTitle>
            <CardDescription>
              Your password has been successfully updated.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                {success}
              </AlertDescription>
            </Alert>
            <div className="mt-6">
              <Button 
                onClick={() => typeof window !== 'undefined' && window.close()} 
                className="w-full"
                variant="outline"
              >
                Close This Window
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">Reset Your Password</CardTitle>
          <CardDescription>
            Enter your new password below. It must be at least 8 characters and contain at least one number.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={showPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
              {newPassword && (
                <div className="text-sm space-y-1">
                  <div className={`flex items-center gap-2 ${newPassword.length >= 8 ? 'text-green-600' : 'text-red-600'}`}>
                    {newPassword.length >= 8 ? (
                      <CheckCircle className="h-3 w-3" />
                    ) : (
                      <XCircle className="h-3 w-3" />
                    )}
                    At least 8 characters
                  </div>
                  <div className={`flex items-center gap-2 ${/\d/.test(newPassword) ? 'text-green-600' : 'text-red-600'}`}>
                    {/\d/.test(newPassword) ? (
                      <CheckCircle className="h-3 w-3" />
                    ) : (
                      <XCircle className="h-3 w-3" />
                    )}
                    Contains at least one number
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
              {confirmPassword && (
                <div className={`text-sm flex items-center gap-2 ${newPassword === confirmPassword ? 'text-green-600' : 'text-red-600'}`}>
                  {newPassword === confirmPassword ? (
                    <CheckCircle className="h-3 w-3" />
                  ) : (
                    <XCircle className="h-3 w-3" />
                  )}
                  Passwords match
                </div>
              )}
            </div>

            {error && (
              <Alert>
                <XCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={loading || !newPassword || !confirmPassword}
            >
              {loading ? 'Updating Password...' : 'Update Password'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    }>
      <ResetPasswordForm />
    </Suspense>
  )
}