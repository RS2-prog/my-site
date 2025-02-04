import React from 'react'
import { motion } from 'motion/react'
import { SectionProps } from '@/types/sectionTypes'
import LinkButton from '../utils/LinkButton';
import { links } from '../header/Header';

const ProfileSection: React.FC<SectionProps> = ({ active }) => {
  const myName = "R.S.";
  const profileText = "理系から文系へ転じて哲学を学び、その後WEBエンジニアとして再び理系の道へ。ユーザーの使いやすさ、顧客の満足度、そして自分自身の達成感を大切にしながら、これからも努力を続けていきます。";

  return (
    <div
      className={`h-screen w-full ${active ? 'overflow-y-auto' : 'overflow-y-hidden'} bg-[#ecf7fa]
      flex relative`}
    >
      
      <div className='w-2/5 ml-[20%] mb-[10%] mt-auto'>
        <motion.div
          className='text-[32pt] mb-4 font-mono'
        >
          {myName}
        </motion.div>
        <motion.div
          className="text-[18pt] leading-loose tracking-wider relative"
        >
          {profileText}
          <LinkButton href={links.about} label='view more' style='mt-4'/>
        </motion.div>
      </div>
    </div>
  )
}

export default ProfileSection