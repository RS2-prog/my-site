import { SectionProps } from '@/types/sectionTypes'
import React from 'react'
import LinkButton from '../utils/LinkButton';
import { links } from '../header/Header';

const GoalSection: React.FC<SectionProps> = ({ active }) => {
  const text = ["フルスタックエンジニアを目指して、バランスよく経験とスキルを磨いていきます。", 
    "そしてWEBを中心に可能性を広げて、様々なプロジェクトに携われるように頑張ります。",
    ].join('');

  return (
    <div
      className={`h-screen w-full ${active ? 'overflow-y-auto' : 'overflow-y-hidden'} bg-[#ecf7fa]
      flex flex-col justify-center space-y-[6vh]`}
    >
      <div className='w-[40%] mr-[10%] ml-auto text-[18pt] leading-loose tracking-wider'>
        {text}
      </div>
      <div className='flex w-[30%] place-content-between mr-[20%] ml-auto'>
        <LinkButton href={links.works} label="view works" />
        <LinkButton href={links.contact} label="contact me" />
      </div>
    </div>
  )
}

export default GoalSection
