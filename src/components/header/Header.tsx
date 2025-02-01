import React from 'react'
import LinkItem from './LinkItem';

const linkItems = [
  {href: "/", label: "Home"},
  {href: "/", label: "About"},
  {href: "/", label: "Works"},
  {href: "/", label: "Contact"},
];

const Header = () => {
  return (
    <header className="fixed top-0 w-full">
      {/* <div className="h-8 bg-[#ecf7fa]"></div> */}
      
      <div className="w-full h-20 bg-gradient-to-b from-[#ecf7fa] to-transparent">
        <nav>
          <ul className='w-full flex justify-center mx-auto space-x-12'>
            <LinkItem href="/" label="Home"></LinkItem>
            <p className='font-sans text-gray-500 opacity-60 pointer-events-none'> | </p>
            <LinkItem href="/" label="About"></LinkItem>
            <p className='font-sans text-gray-500 opacity-60 pointer-events-none'> | </p>
            <LinkItem href="/" label="Works"></LinkItem>
            <p className='font-sans text-gray-500 opacity-60 pointer-events-none'> | </p>
            <LinkItem href="/" label="Contact"></LinkItem>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
