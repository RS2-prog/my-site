import Header from '@/components/header/Header'
import Label from '@/components/utils/Label'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="w-[80%] mx-auto flex h-screen items-center">
        {/* Left Section - Contact Me */}
        <div className='flex flex-col justify-center w-1/2 items-center'>
          <Label id="contact" label="Contact Me" />
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
        <div className='flex flex-col justify-center w-1/2 items-center'>
          <Label id="links" label="Links" />
          <div className="flex flex-col items-center mt-4 space-y-4">
            {/* GitHubリンク */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="flex items-center text-blue-600 hover:text-blue-800 text-[16pt]"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-2"
              >
                <path d="M12 .5C5.73.5.5 5.74.5 12c0 5.1 3.29 9.41 7.86 10.95.58.1.79-.26.79-.58v-2.17c-3.22.7-3.9-1.57-3.9-1.57-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.2 1.8 1.2 1.05 1.8 2.75 1.28 3.43.98.1-.76.41-1.28.74-1.57-2.57-.3-5.28-1.29-5.28-5.73 0-1.27.46-2.31 1.2-3.13-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.2a10.86 10.86 0 0 1 5.8 0c2.2-1.51 3.17-1.2 3.17-1.2.63 1.65.23 2.87.12 3.17.74.82 1.2 1.86 1.2 3.13 0 4.44-2.72 5.43-5.3 5.72.42.36.8 1.08.8 2.18v3.23c0 .32.21.69.8.58A10.98 10.98 0 0 0 23.5 12c0-6.26-5.23-11.5-11.5-11.5z"/>
              </svg>
              GitHub
            </a>
            
            {/* Qiitaリンク */}
            <a
              href="https://qiita.com/yourusername"
              target="_blank"
              className="flex items-center text-green-600 hover:text-green-800 text-[16pt]"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path d="M12.003 0c-6.624 0-12 5.373-12 12 0 6.625 5.373 12 12 12 6.625 0 12-5.372 12-12 0-6.625-5.373-12-12-12zM12 20c-4.416 0-8-3.584-8-8 0-4.417 3.584-8 8-8s8 3.583 8 8c0 4.416-3.584 8-8 8z"/>
              </svg>
              Qiita
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
