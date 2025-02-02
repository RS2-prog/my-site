import { SectionProps } from '@/types/sectionTypes'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

const Top: React.FC<SectionProps> = ({ active }) => {
  const enText = "Code carves the path of evolution. ";
  const jpText = "アウトプットで成長の軌跡を刻む";
  const introText1 = "Portfolio of R.S.";
  const introText2 = "WEBの道を進むエンジニア";
  const typingSpeed = 100;
  const cursorBlinkSpeed = 500;

  // 状態管理
  // テキスト表示
  const [displayedText, setDisplayedText] = useState<string>("");
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0);

  // ステップ
  const [step, setStep] = useState<number>(0);

  // タイピングアニメーション
  useEffect(() => {
    if (index < enText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + enText[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      setShowCursor(false);
      setTimeout(() => setStep(1), 600); // カーソルを消してから1秒後にstepを進める
    }
  }, [index, enText, typingSpeed]);

  // カーソルの点滅制御
  useEffect(() => {
    if (index < enText.length) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, cursorBlinkSpeed);
      return () => clearInterval(cursorInterval);
    }
  }, [index, cursorBlinkSpeed]);

  // ステップ管理
  useEffect(() => {
    if(step === 1) {
      setTimeout(() => setStep(2), 750);
    } else if(step === 2) {
      setTimeout(() => setStep(3), 800);
    }
  }, [step]);

  return (
    <div className={`h-screen w-full ${active ? 'overflow-y-auto' : 'overflow-y-hidden'} bg-[#ecf7fa]
    flex flex-col scrollbar-hide`}>
      <div
        className='w-full h-1/4 flex flex-col justify-center items-center'
      >
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: step > 0 ? -20 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='flex justify-center items-center text-[40pt] font-mono'
        >
          {displayedText}
          {showCursor && <span className="animate-blink">|</span>}
        </motion.div>

        {step > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='text-[18pt] font-mono'
          >
            {jpText}
          </motion.div>
        )}
      </div>
      {step > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full flex-1 flex justify-center items-center bg-cover bg-center"
          style={{ backgroundImage: "url('/static/image/top.png')" }}
        >
        </motion.div>
      )}
      {step > 2 ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className='w-full h-1/5 flex flex-col justify-center items-center'
        >
          <p className='text-[16pt] font-mono'>{introText1}</p>
          <p className='text-[10pt]'>{introText2}</p>
        </motion.div>
      ) : (
        <div className='w-full h-1/5'></div>
      )}
    </div>
  )
}

export default Top
