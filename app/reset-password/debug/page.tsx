'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function DebugContent() {
  const searchParams = useSearchParams()
  const [urlInfo, setUrlInfo] = useState<any>({})

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Get all search params
      const searchParamsObj: any = {}
      searchParams.forEach((value, key) => {
        searchParamsObj[key] = value
      })

      // Get hash params
      const hash = window.location.hash.substring(1)
      const hashParams = new URLSearchParams(hash)
      const hashParamsObj: any = {}
      hashParams.forEach((value, key) => {
        hashParamsObj[key] = value
      })

      setUrlInfo({
        fullUrl: window.location.href,
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash,
        searchParams: searchParamsObj,
        hashParams: hashParamsObj
      })
    }
  }, [searchParams])

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Reset Password URL Debug</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <pre className="text-sm overflow-auto">
            {JSON.stringify(urlInfo, null, 2)}
          </pre>
        </div>
        <div className="mt-4">
          <a 
            href="/reset-password" 
            className="text-blue-600 hover:underline"
          >
            Go to Reset Password Page
          </a>
        </div>
      </div>
    </div>
  )
}

export default function DebugPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    }>
      <DebugContent />
    </Suspense>
  )
}