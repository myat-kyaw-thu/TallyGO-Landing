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

      // Check for errors first
      if (finalParams.error) {
        let errorMessage = 'Invalid or expired reset link. Please request a new password reset.'
        
        if (finalParams.errorCode === 'otp_expired') {
          errorMessage = 'This reset link has expired. Please request a new password reset.'
        } else if (finalParams.errorDescription) {
          errorMessage = decodeURIComponent(finalParams.errorDescription.replace(/\+/g, ' '))
        }
        
        setError(errorMessage)
        setValidTokens(false)
      } else if (finalParams.type !== 'recovery' || !finalParams.accessToken || !finalParams.refreshToken) {
        setError('Invalid or expired reset link. Please request a new password reset.')
        setValidTokens(false)
      } else {
        setValidTokens(true)
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

      // Create Supabase client and set session
      const supabase = createSupabaseClient()
      
      // Set the session using tokens from URL
      await supabase.auth.setSession({
        access_token: urlParams.accessToken!,
        refresh_token: urlParams.refreshToken!
      })

      // Update the password
      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword
      })

      if (updateError) {
        setError(updateError.message)
        setLoading(false)
        return
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
            <CardTitle className="text-2xl font-bold text-gray-900">Invalid Reset Link</CardTitle>
            <CardDescription>
              This password reset link is invalid or has expired.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Alert>
              <XCircle className="h-4 w-4" />
              <AlertDescription>
                {error || 'Please request a new password reset from the app.'}
              </AlertDescription>
            </Alert>
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