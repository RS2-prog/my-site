import Header from '@/components/header/Header'
import { PageContentProps } from '@/components/utils/NavigationMenu';
import { div } from 'motion/react-client';
import React from 'react'

const About = () => {
  const pageContents: PageContentProps[] = [
    {id: "profile", label: "Profile"},
    {id: "skill", label: "Skill"},
    {id: "history", label: "History"}
  ];

  return (
    <div>
      <Header/>
      <div className='w-[50%] mx-auto overflow-scroll scrollbar-hide flex flex-col items-start space-y-8'>
        <div className='h-[72px] bg-blue-50'></div>
        <div 
          id={pageContents[0].id}
          className='font-mono text-[32px] relative inline-block after:absolute after:left-0 after:top-1/2 after:w-full after:h-full after:border-b-[1px] after:border-black after:-translate-y-1/2'
        >
          {pageContents[0].label}
        </div>
        
        <div 
          id={pageContents[1].id}
          className='font-mono text-[32px] relative inline-block after:absolute after:left-0 after:top-1/2 after:w-full after:h-full after:border-b-[1px] after:border-black after:-translate-y-1/2'
        >
          {pageContents[1].label}
        </div>

        <div 
          id={pageContents[2].id}
          className='font-mono text-[32px] relative inline-block after:absolute after:left-0 after:top-1/2 after:w-full after:h-full after:border-b-[1px] after:border-black after:-translate-y-1/2'
        >
          {pageContents[2].label}
        </div>

      </div>

    </div>
  )
}

export default About
