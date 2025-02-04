import React, { useState } from "react";
import { motion } from "framer-motion";

type ArrowButtonProps = {
  onClick: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return; 

    onClick();

    setIsAnimating(true);

    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 500);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <motion.button
      initial={{ opacity: 1, scaleY: 1.5, scaleX: 0.7 }}
      animate={{
        opacity: isAnimating ? 0 : 1, 
        x: isAnimating
          ? isOpen
            ? 50
            : -50 
          : [0, isOpen ? -15 : 15, 0], 
      }}
      transition={{
        opacity: { duration: 0.5 }, 
        x: isAnimating
          ? { duration: 0.5 } 
          : {
              duration: 1.2,
              ease: ["easeInOut", "easeIn"], 
              times: [0, 0.6, 1], 
              repeat: Infinity,
              repeatDelay: 0.5, 
            },
      }}
      type="button"
      onClick={handleClick}
      className={`absolute ${
        isOpen ? "top-1/2 left-[5%]" : "top-1/2 left-[45%]"
      } bg-transparent outline-none text-[32pt] z-4 font-noto font-[100]`}
    >
      {isOpen ? "＞" : "＜"}
    </motion.button>
  );
};

export default ArrowButton;
