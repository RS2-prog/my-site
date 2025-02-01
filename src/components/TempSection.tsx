import { SectionProps } from '@/types/sectionTypes'
import React from 'react'

const TempSection: React.FC<SectionProps> = ({ active }) => {
  return (
    <div className={`h-screen w-full ${active ? 'overflow-y-auto' : 'overflow-y-hidden'} bg-[#ecf7fa]
    border-y-2 border-gray-400 flex flex-col justify-center items-center text-4xl space-y-4`}>
      CONTENT
    </div>
  )
}

export default TempSection
