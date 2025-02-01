import React from 'react'
import { animate, motion } from "framer-motion";
import Link from 'next/link';

type LinkItemProps = {
  href: string;
  label: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, label }) => {
  return (
    <motion.li 
      className="relative cursor-pointer"
      whileHover="hover"
      initial="initial"
    >
      <Link href={href} className='relative block'>
        <p className='font-serif'>{label}</p>
        <motion.div
          variants={{
            initial: { scaleX: 0, opacity: 0 },
            hover: { scaleX: 2, opacity: 1 }
          }}
          transition={{ duration: 0.6 }}
          className='absolute bottom-0 left-0 h-[1px] w-full bg-black'
        />
      </Link>
    </motion.li>
  )
}

export default LinkItem
