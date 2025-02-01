import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string; 
  subtitle: string; 
  isVisible: boolean;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, isVisible }) => {
  if (title === "") {return}

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
      transition={{ duration: 0.5 }}
      className="fixed top-20 bg-white shadow-lg rounded-r-xl p-4"
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      <h2 className="text-lg text-gray-600">{subtitle}</h2>
    </motion.div>
  );
};

export default SectionTitle;