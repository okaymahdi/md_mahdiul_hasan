'use client'

import { Circle } from 'rc-progress'
import { useEffect, useState } from 'react'

const ProgressCircular = ({ title, percentage }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let currentProgress = 0
    const incrementProgress = percentage / 100
    const interval = setInterval(() => {
      currentProgress += incrementProgress
      if (currentProgress >= percentage) {
        clearInterval(interval)
        setProgress(percentage)
      } else {
        setProgress(currentProgress)
      }
    }, 10)

    return () => clearInterval(interval) // Cleanup
  }, [percentage])

  return (
    <div className="relative w-40 md:w-48 h-40 md:h-48">
      {/* Text content */}
      <div className="absolute inset-0 rounded-full bg__gradient">
        <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full text-center">
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {title}
          </p>
          <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
            {Math.round(progress)}%
          </p>
        </div>
      </div>
      {/* Circle progress */}
      <Circle
        percent={progress}
        strokeWidth={6}
        strokeColor="#4F46E5" // Vibrant Indigo for Light Mode
        trailColor="#D1D5DB" // Cool Gray for Light Mode
        className="dark:strokeColor-[#818CF8] dark:trailColor-[#374151]" // Adjust colors for dark mode
      />
    </div>
  )
}

export default ProgressCircular
