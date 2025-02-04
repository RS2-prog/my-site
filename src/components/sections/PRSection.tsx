import { SectionProps } from '@/types/sectionTypes'
import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react'

const PRSection: React.FC<SectionProps> = ({ active }) => {
  const abilities = [
    {reason: "留学生活で培った", result:"協調性"},
    {reason: "哲学研究由来の", result:"論理性"},
    {reason: "小売業で鍛えられた", result:"対応力"},
    {reason: "多言語使用者故の", result:"概念理解力"},
    {reason: "生涯遅刻回数二回の", result:"時間観念"},
  ];

  return (
    <div
      className={`h-screen w-full ${active ? 'overflow-y-auto' : 'overflow-y-hidden'} bg-[#ecf7fa]
      flex items-center justify-end `}
    >
      <div className="relative w-[60%] h-[50%] ml-auto mr-[10%] mt-auto mb-[5%]">
        <ul className="h-full flex justify-between pt-8">
          {abilities.map((ability, index) => (
            <li
              key={index}
              className="relative flex space-x-2"
            >
              <span className="text-gray-600 text-[16pt] [writing-mode:vertical-rl]">{ability.reason}</span>
              <p className="text-gray-800 text-[32pt] [writing-mode:vertical-rl]">{ability.result}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PRSection
