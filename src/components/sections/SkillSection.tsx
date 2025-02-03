import { SectionProps } from '@/types/sectionTypes'
import React from 'react'
import SkillSpiderChart from '../content/SkillSpiderChart'

const SkillSection: React.FC<SectionProps> = ({ active }) => {
  return (
    <div
      className={`h-screen w-full ${active ? 'overflow-y-auto' : 'overflow-y-hidden'} bg-[#ecf7fa]
      flex items-center `}
    >
      <div className='w-[60%] h-[99%] ml-auto'>
        <SkillSpiderChart/>
      </div>
    </div>
  )
}

export default SkillSection
