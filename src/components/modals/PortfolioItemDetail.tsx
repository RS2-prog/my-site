import { motion } from 'framer-motion'
import React from 'react'
import { PortfolioDetailProps } from '../contents/works'
import ReactDOM from 'react-dom'

const PortfolioDetail = ({ title, githubLink, detail, onClick }: { title: string, githubLink: string, detail: PortfolioDetailProps; onClick: () => void }) => {
  
  const hasGithub: boolean = !!githubLink;
  
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.stopPropagation();
  };

  return ReactDOM.createPortal(
    <motion.div
      onClick={onClick}
      className="fixed top-0 left-0 w-screen h-screen z-[1000] bg-[#3e4145] bg-opacity-50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-[#ecf7fa] p-6 rounded-lg shadow-lg w-[75%] h-[75%]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()} // 背景クリックで閉じるが、中身クリックでは閉じない
      >
        <h2 className='text-2xl font-bold mb-4'>{title}</h2>
        <h2 className="text-xl font-bold mb-4 border-b-[1px] border-black inline-block">使用技術</h2>
        <div className="mb-4">{detail.skills}</div>
        <h2 className="text-xl font-bold mb-4 border-b-[1px] border-black inline-block">要点</h2>
        <ul className='mb-4'>
          {detail.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <h2 className="text-xl font-bold mb-4 border-b-[1px] border-black inline-block">説明</h2>
        <div className='mb-4'>{detail.description}</div>
        {hasGithub && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
            <img src="/static/icon/github-mark.png" alt="Github" className='w-5 h-5 mr-2 hover:scale-110 transition duration-500'/>
          </a>
        )}
      </motion.div>
    </motion.div>,
    document.body
  )
}

export default PortfolioDetail
