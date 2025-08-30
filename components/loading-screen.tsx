"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div className="relative">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary animate-spin">
            <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">N</span>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground animate-pulse">Loading Portfolio...</h2>

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mx-auto">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-sm text-muted-foreground">
            {progress < 60 && "Initializing..."}
            {progress >= 60 && "Almost ready!"}
          </p>
        </div>
      </div>
    </div>
  )
}
