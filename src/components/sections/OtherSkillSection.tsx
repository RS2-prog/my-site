import { SectionProps } from '@/types/sectionTypes'
import React from 'react'

const OtherSkillSection: React.FC<SectionProps> = ({ active }) => {
  return (
    <div
      className={`h-screen w-full ${active ? 'overflow-y-auto' : 'overflow-y-hidden'} bg-[#ecf7fa]
      flex items-center `}
    >

    </div>
  )
}

export default OtherSkillSection