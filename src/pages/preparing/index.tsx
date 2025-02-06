import Header from '@/components/header/Header'
import { NextSeo } from 'next-seo'
import React from 'react'

const PreParing = () => {
  return (
    <>
      <NextSeo 
        title="Portfolio of R.S. -Preparing"
        description="This page is coming soon"
        canonical="https://rs2025portfolio.com/"
      />
      <div className='bg-[#ecf7fa]'>
        <Header />
        <div className='h-screen flex flex-col items-center justify-center'>
          <div className='font-mono text-[48pt]'>Coming Soon</div>
          <div>このページはまだ準備中です</div>
        </div>
      </div>
    </>
  )
}

export default PreParing
