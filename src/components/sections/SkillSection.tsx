import { SectionProps } from '@/types/sectionTypes'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import SkillSpiderChart from '../contents/SkillSpiderChart'
import ArrowButton from '../utils/ArrowButton'
import LinkButton from '../utils/LinkButton'
import { links } from '../header/Header'

const SkillSection: React.FC<SectionProps> = ({ active }) => {
  const skills = [
    {language: "Python", expand: "Django, FastAPI"},
    {language: "JavaScript/TypeScript", expand: "React.js, Next.js, Vue.js, Node.js..."},
    {language: "Java", expand: "Spring"}, 
    {language: "Ruby", expand: "Ruby on rails"},
    {language: "HTML/CSS", expand: "Tailwind, Bootstrap"}
  ];

  const [detailDisplayed, setDetailDisplayed] = useState<boolean>(true);

  const handleClick = () => {
    setDetailDisplayed(!detailDisplayed);
  }

  return (
    <div
      className={`h-screen w-full ${active ? 'overflow-y-visible' : 'overflow-y-hidden'} bg-[#ecf7fa]
      flex items-center relative`}
    >
      <ArrowButton onClick={handleClick}/>
      <motion.div 
        animate={{ 
          width: detailDisplayed ? '50%' : '60%', 
          height: detailDisplayed ? '70%' : '99%', 
          marginTop: detailDisplayed ? 'auto' : 0, 
          marginLeft: detailDisplayed ? 0 : 'auto'
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`${detailDisplayed ? 'w-[50%] h-[70%] mt-auto' : 'w-[60%] h-[99%] ml-auto'}`}
      >
        <SkillSpiderChart/>
      </motion.div>
      <motion.ul 
        initial={{ opacity: 0 }}
        animate={{ opacity: detailDisplayed ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`w-[40%] h-[90%] gap-[5vh] ml-auto ${detailDisplayed ? 'visible' : 'hidden'} flex flex-col justify-center`}
      >
        {skills.map((skill, index) => (
          <li key={index}>
            {index !== skills.length - 1 ? (
              <>
                <p className='font-mono text-2xl'>{skill.language}</p>
                <p className='p-4 text-lg'>{skill.expand}</p>
              </>   
            ) : (
              <LinkButton href={links.about} label='view more'/>
            )}
            
          </li>
        ))}
      </motion.ul>
    </div>
  )
}

export default SkillSection
