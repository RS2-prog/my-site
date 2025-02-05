import React from 'react'
import LinkItem from './LinkItem';

export const links = {
  home: "/",
  about: "/about",
  works: "/preparing",
  contact: "/preparing"
}

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-10">
      <div className="w-full h-20 bg-gradient-to-b from-[#ecf7fa] to-transparent">
        <nav>
          <ul className='w-full flex justify-center mx-auto space-x-12'>
            <LinkItem href={links.home} label="Home"></LinkItem>
            <p className='font-sans text-gray-500 opacity-60 pointer-events-none'> | </p>
            <LinkItem href={links.about} label="About"></LinkItem>
            <p className='font-sans text-gray-500 opacity-60 pointer-events-none'> | </p>
            <LinkItem href={links.works} label="Works"></LinkItem>
            <p className='font-sans text-gray-500 opacity-60 pointer-events-none'> | </p>
            <LinkItem href={links.contact} label="Contact"></LinkItem>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
