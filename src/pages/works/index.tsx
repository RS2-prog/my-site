import PortfolioItem from '@/components/contents/PortfolioItem'
import { apps, progs, sites } from '@/components/contents/works'
import Header from '@/components/header/Header'
import Label from '@/components/utils/Label'
import NavigationMenu, { PageContentProps } from '@/components/utils/NavigationMenu'
import { NextSeo } from 'next-seo'
import React from 'react'

const index = () => {
  const pageContents: PageContentProps[] = [
    {id: "site", label: "Webサイト"},
    {id: "app", label: "Webアプリケーション"},
    {id: "prog", label: "プログラム"},
  ];

  return (
    <>
      <NextSeo 
        title="Portfolio of R.S. -Works"
        description="Some works by R.S."
        canonical="https://rs2025portfolio.com/"
      />
      <div className='mt-24'>
        <Header />
        <NavigationMenu sections={pageContents} wide={true}/>
        <div className='w-[60%] mx-auto flex flex-col gap-4'> 
          <div className='my-[4vh]'>
            <Label id={pageContents[0].id} label={pageContents[0].label} />
          </div>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[4vh]'>
            {sites.length > 0 ? (
              sites.map((item, index) => (
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
              ))
            ) : (
              <div
                className='text-2xl font-mono text-center h-48 w-full'
              >
                Comming soon...
              </div>
            )}
          </div>
          <div className='my-[4vh]'>
            <Label id={pageContents[1].id} label={pageContents[1].label} />
          </div>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[4vh]'>
            {apps.length > 0 ? (
              apps.map((item, index) => (
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
              ))
            ) : (
              <div
                className='text-2xl font-mono text-center h-48 w-full'
              >
                Comming soon...
              </div>
            )}
          </div>
          <div className='my-[4vh]'>
            <Label id={pageContents[2].id} label={pageContents[2].label} />
          </div>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[4vh]'>
            {progs.length > 0 ? (
              progs.map((item, index) => (
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
              ))
            ) : (
              <div
                className='text-2xl font-mono text-center h-48 w-full flex justify-center items-center'
              >
                Comming soon...
              </div>
            )}
          </div>
        </div>

        {/* 下部余白 */}
        <div
          className='text-2xl h-48 w-full'
        >
        </div>
      </div>
    </>
  )
}

export default index
