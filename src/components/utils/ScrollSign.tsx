import { motion } from 'motion/react'
import React from 'react'
import { Polygon } from "@visx/shape";

const ScrollSign = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-2">
      <span className="text-lg font-medium font-mono">Scroll</span> 
      <motion.div
        className="text-2xl scale-x-[400]"
        animate={{
          y: [0, 20], // 下に移動
          opacity: [1, 0], // 徐々にフェードアウト
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        initial={{ y: 0, opacity: 1 }} // 初期位置
      >
        <svg width={120} height={20} viewBox="0 0 120 20">
        {/* 左の三角形 */}
        <Polygon
            points={[[0,0], [5, 0], [60,18], [60,20]]}
            fill="black"
          />
          {/* 右の三角形 */}
          <Polygon
            points={[[120,0], [115, 0], [60,18], [60,20]]}
            fill="black"
          />
        </svg>
      </motion.div>
    </div>
  )
}

export default ScrollSign
