import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string; 
  subtitle: string; 
  isVisible: boolean;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, isVisible }) => {
  if (title === "") {return}

  return (
    <div className="fixed top-[14.8vh] left-[11.67vw] flex flex-col gap-2">
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
        transition={{ duration: 0.5 }}
        className="text-[32pt] font-bold font-mono"
      >
        {title}
      </motion.h1>
      
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: isVisible ? "150%" : 0, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="h-[2px] bg-gray-600"
      />
      
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl text-gray-600 font-mono"
      >
        {subtitle}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;