import Header, { links } from '@/components/header/Header'
import LinkButton from '@/components/utils/LinkButton'
import { NextSeo } from 'next-seo'
import React from 'react'

const Custom404 = () => {
  return (
    <>
      <NextSeo 
        title="Portfolio of R.S. -Farland"
        description="404 Not Found"
        canonical="https://rs2025portfolio.com/"
      />
      <Header />
      <div className='w-[120vh] mx-auto h-screen items-center place-content-between flex'>
        <div className='items-center justify-center'>
          <div className='text-[16pt]'>
            R.S.はまだ道の途中、ここまで辿り着いていないようです
          </div>
          <div className='text-[12pt] font-mono'>
            404 Not Found
          </div>
        </div>
        <div className='w-[1px] bg-black h-[30%] my-auto'></div>
        <div>
          <LinkButton href={links.home} label='Back to top'/>
        </div>
      </div>
    </>
  )
}

export default Custom404
