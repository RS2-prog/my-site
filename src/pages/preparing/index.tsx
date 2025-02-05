import Header from '@/components/header/Header'
import React from 'react'

const PreParing = () => {
  return (
    <div>
      <Header />
      <div className='h-screen flex flex-col items-center justify-center'>
        <div className='font-mono text-[48pt]'>Coming Soon</div>
        <div>このページはまだ準備中です</div>
      </div>
    </div>
  )
}

export default PreParing
