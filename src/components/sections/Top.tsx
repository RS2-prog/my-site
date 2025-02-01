import { SectionProps } from '@/types/sectionTypes'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

const Top: React.FC<SectionProps> = ({ active }) => {
  const text = "Code carves the path of evolution. ";
  const typingSpeed = 100;
  const cursorBlinkSpeed = 500;

  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, typingSpeed]);

  useEffect(() => {
    if (index === text.length) {
      setShowCursor(false);
      return;
    }

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(cursorInterval);
  }, [index, text.length, cursorBlinkSpeed]);

  return (
    <div className={`h-screen w-full ${active ? 'overflow-y-auto' : 'overflow-y-hidden'} bg-[#ecf7fa]
    flex flex-col`}>
      <div
        className='w-full h-1/4 flex flex-col justify-center items-center'
      >
        <div
          className='flex justify-center items-center text-[40pt] font-mono'
        >
          {displayedText}
          {showCursor && <span className="animate-blink">|</span>}
        </div>
        <div>
          ポートフォリオで成長の軌跡を刻む
        </div>
      </div>
      <motion.div
        className='w-full flex-1 text-[40pt] flex justify-center items-center font-mono'
      >
        To be continue...
      </motion.div>
      <motion.div>

      </motion.div>
    </div>
  )
}

export default Top
