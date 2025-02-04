import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';

type LinkButtonProps = {
  href: string;
  label: string;
  style?: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ href, label, style }) => {
  return (
    <motion.div
      className={`cursor-pointer relative flex justify-left w-[16vh] ${style}`}
      whileHover="hover"
      initial="initial"
    >
      <Link href={href}>
        <p className='font-serif text-xl'>{label}</p>
        <motion.div
          variants={{
            initial: { width: "100%", left: "0%", opacity: 1 },
            hover: { width: "40%", left: "0%", opacity: 0.8 }
          }}
          transition={{ duration: 0.6 }}
          className='absolute bottom-0 left-0 h-[1px] w-full bg-black'
        />
      </Link>
    </motion.div>
  );
};

export default LinkButton;