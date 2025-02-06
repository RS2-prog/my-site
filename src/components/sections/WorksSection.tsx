import { SectionProps } from '@/types/sectionTypes'
import React from 'react'
import { apps, sites } from '../contents/works'
import PortfolioItem from '../contents/PortfolioItem';
import LinkButton from '../utils/LinkButton';
import { links } from '../header/Header';

const WorksSection: React.FC<SectionProps> = ({ active }) => {
  const portfolioList = [sites[0], apps[0], apps[1]];

  return (
    <div
      className={`h-screen w-full ${active ? 'overflow-y-auto' : 'overflow-y-hidden'} bg-[#ecf7fa]
      flex flex-col justify-center`}
    >
      <div className='w-[90%] pt-[22vh] grid grid-cols-3 justify-items-center mx-auto'>
        {portfolioList.map((item, index) => (
          <PortfolioItem
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
            hasGithub={item.hasGithub}
            hasQiita={item.hasQiita}
            githubLink={item.githubLink}
            qiitaLink={item.qiitaLink}
          />
        ))}
      </div>
      <div className='flex w-[80%] mx-auto justify-end mt-[8vh]'>
        <LinkButton href={links.works} label='view more' />
      </div>
    </div>
  )
}

export default WorksSection