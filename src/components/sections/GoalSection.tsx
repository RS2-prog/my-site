import { SectionProps } from '@/types/sectionTypes'
import React from 'react'

const GoalSection: React.FC<SectionProps> = ({ active }) => {
  const text = ["フルスタックエンジニアを目指して、バランスよく経験とスキルを磨いていきます。", 
    "そしてWEBを中心に可能性を広げて、様々なプロジェクトに携われるように頑張ります。",
    ].join('');

  return (
    <div
      className={`h-screen w-full ${active ? 'overflow-y-auto' : 'overflow-y-hidden'} bg-[#ecf7fa]
      flex items-center `}
    >
      <div className='w-[40%] mr-[10%] ml-auto text-[18pt] leading-loose tracking-wider'>
        {text}
      </div>
    </div>
  )
}

export default GoalSection
