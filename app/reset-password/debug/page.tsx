'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function DebugPage() {
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