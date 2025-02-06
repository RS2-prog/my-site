import Header, { links } from '@/components/header/Header'
import LinkButton from '@/components/utils/LinkButton'
import { NextSeo } from 'next-seo'
import React from 'react'

const Custom500 = () => {
  return (
    <>
      <NextSeo 
        title="Portfolio of R.S. -Setback"
        description="500 Unexcepted Error"
        canonical="https://rs2025portfolio.com/"
      />
      <Header />
      <div className='bg-[#ecf7fa]'>
        <div className='w-[120vh] mx-auto h-screen items-center place-content-between flex '>
          <div className='items-center justify-center'>
            <div className='text-[16pt]'>
              大丈夫、R.S.のチャレンジもよく未知の困難に遭遇します
            </div>
            <div className='text-[12pt] font-mono'>
              500 Unexcepted Error
            </div>
          </div>
          <div className='w-[1px] bg-black h-[30%] my-auto'></div>
          <div>
            <LinkButton href={links.contact} label='Report this'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Custom500
