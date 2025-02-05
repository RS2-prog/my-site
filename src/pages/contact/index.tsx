import Header from '@/components/header/Header'
import Label from '@/components/utils/Label'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <Header />
      <div className='w-[50%] mx-auto overflow-scroll scrollbar-hide flex flex-col items-start space-y-8 h-screen justify-center'>
        <Label id='contact' label='Contact Me'/>
      </div>
    </div>
  )
}

export default Contact
