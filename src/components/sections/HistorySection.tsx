import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { SectionProps } from '@/types/sectionTypes'

const HistorySection: React.FC<SectionProps> = ({ active }) => {
  const events = [
    {date: "2022/03", text: "静岡大学人文社会科学部を卒業"},
    {date: "2022/04", text: "ディスカウントショップにて消耗品の販売に従事"},
    {date: "2022/12", text: "プログラミングの独学を開始"},
    {date: "2023/07", text: "エンジニアに転職し、WEBベースの開発に携わる"},
  ];
  
  // 状態管理
  // 表示件数
  const [visibleCount, setVisibleCount] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = window.innerHeight * 1.8;
  
      if (scrollPosition > triggerPosition) {
        setVisibleCount((prev) => {
          const newCount = Math.min(prev + 1, events.length);
          if (newCount === events.length) {
            window.removeEventListener("scroll", handleScroll); 
          }
          return newCount;
        });
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, [events.length]);

  return (
    <div
      className={`h-screen w-full ${active ? 'overflow-y-auto' : 'overflow-y-hidden'} bg-[#ecf7fa]
      flex items-center justify-end `}
    >
      <div className="relative w-1/2 h-[80%] my-auto mr-16">
        <ul className="h-full flex flex-col justify-between pt-8">
          {events.map((event, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={index < visibleCount ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="relative flex items-center space-x-6"
            >
              <span className="text-gray-600 text-[20pt] w-24">{event.date}</span>
              <p className="text-gray-800 text-[16pt]">{event.text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HistorySection
