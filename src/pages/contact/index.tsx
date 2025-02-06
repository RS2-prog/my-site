import Header from '@/components/header/Header'
import Label from '@/components/utils/Label'
import { NextSeo } from 'next-seo'
import React from 'react'

const Contact = () => {
  return (
    <>
      <NextSeo 
        title="Portfolio of R.S. -Contact"
        description="Contact to R.S."
        canonical="https://rs2025portfolio.com/"
      />
      <div className='bg-[#ecf7fa]'>
        <Header />
        <div className="w-[60%] mx-auto flex h-screen items-center place-content-between">
          {/* Left Section - Contact Me */}
          <div className='flex flex-col justify-center w-1/2 mr-[33vh]'>
            <div>
              <Label id="contact" label="Contact Me" />
            </div>
            <a
              href="https://forms.gle/6kgPthkjJtzSotA89"
              target="_blank"
              className="text-[16pt] flex items-center text-black hover:text-gray-500 transition-colors mt-4"
              rel="noopener noreferrer"
            >
              メッセージフォーム
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h7v2H7v10h10v-5h2v7H5V5z"/>
              </svg>
            </a>
            <span className="mt-2 text-[16pt] text-gray-600">( Google Form )</span>
          </div>

          {/* Middle Divider */}
          <div className='bg-black w-[1px] h-3/5'></div>
          
          {/* Right Section - Links */}
          <div className='flex flex-col justify-center w-1/2 ml-[33vh]'>
            <div>
              <Label id="links" label="My Links" />
            </div> 
            <div className="flex flex-col mt-4 space-y-4">
              {/* GitHubリンク */}
              <a
                href="https://github.com/RS2-prog"
                target="_blank"
                className="flex items-center text-black hover:text-gray-600 text-[16pt]"
                rel="noopener noreferrer"
              >
                <img src="/static/icon/github-mark.png" alt="Github" className='w-5 h-5 mr-2'/>
                GitHub
              </a>
              
              {/* Qiitaリンク */}
              <a
                href="https://qiita.com/Ryu_S_2025"
                target="_blank"
                className="flex items-center text-black  hover:text-gray-600 text-[16pt]"
                rel="noopener noreferrer"
              >
                <img src="/static/icon/qiita-icon.png" alt="Github" className='w-5 h-5 mr-2'/>
                Qiita
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
