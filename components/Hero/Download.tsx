'use client'

import { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Download, CheckCircle, AlertCircle } from 'lucide-react'

interface DownloadButtonProps {
  fileUrl: string
  fileName: string
}

export default function DownloadButton({ fileUrl, fileName }: DownloadButtonProps) {
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'success' | 'error'>('idle')

  const handleDownload = useCallback(async () => {
    setDownloadStatus('downloading')

    try {
      const response = await fetch(fileUrl)
      if (!response.ok) throw new Error('Download failed')

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(url)

      setDownloadStatus('success')
      setTimeout(() => setDownloadStatus('idle'), 3000)
    } catch (error) {
      console.error('Download error:', error)
      setDownloadStatus('error')
      setTimeout(() => setDownloadStatus('idle'), 3000)
    }
  }, [fileUrl, fileName])

  return (
    <Button
      onClick={handleDownload}
      disabled={downloadStatus === 'downloading'}
      className="w-full sm:w-[200px] h-[45px] sm:h-[50px] rounded-lg text-gray-400 bg-white hover:bg-orange-500 hover:text-blue-500"
    >
      {downloadStatus === 'idle' && (
        <>
          <Download className="mr-2 h-4 w-4" /> Download CV
        </>
      )}
      {downloadStatus === 'downloading' && 'Downloading...'}
      {downloadStatus === 'success' && (
        <>
          <CheckCircle className="mr-2 h-4 w-4" /> Downloaded
        </>
      )}
      {downloadStatus === 'error' && (
        <>
          <AlertCircle className="mr-2 h-4 w-4" /> Error
        </>
      )}
    </Button>
  )
}

