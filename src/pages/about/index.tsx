//import Breadcrumbs from '@/components/header/BreadCrumbs';
import Header from '@/components/header/Header'
import Label from '@/components/utils/Label';
import NavigationMenu, { PageContentProps } from '@/components/utils/NavigationMenu';
import React from 'react'

const About = () => {
  const pageContents: PageContentProps[] = [
    {id: "skill", label: "スキル"},
    {id: "history", label: "経歴"}
  ];

  return (
    <div className='mt-24'>
      <Header/>
      <NavigationMenu sections={pageContents} />
      {/* <Breadcrumbs /> */}
      <div className='w-[50%] mx-auto overflow-scroll scrollbar-hide flex flex-col items-start space-y-8'>
        <Label id={pageContents[0].id} label={pageContents[0].label} />
        <div className='w-full flex flex-col space-y-6'>
          <div className='flex flex-col space-y-6'>
            <div className='text-[18pt] font-mono'>フロントエンド</div>
            <div>
              JavaScript, TypeScript, HTML, CSS, Tailwind, React, Next.js...
            </div>
            <div className='text-[18pt] font-mono'>バックエンド</div>
            <div>
              Python, Java, Ruby, Django, FastAPI, Spring, Ruby on rails, Node.js...
            </div>
          </div>
          <div className='flex space-x-12'>
            <div>
              <div className='text-[18pt] font-mono'>インフラ</div>
              <div>AWS, Docker</div>
            </div>
            <div>
              <div className='text-[18pt] font-mono'>データベース</div>
              <div>OracleDB, PostgreSQL, SQLite</div>
            </div>
            {/* レイアウト調整↓ */}
            <div>
              <div className='text-[18pt] font-mono'>その他</div>
              <div>Git, Linux...</div>
            </div>
          </div>
        </div>

        {/* 中間余白 */}
        <div className='h-[50px]'></div>
        
        <Label id={pageContents[1].id} label={pageContents[1].label} />
        <ul className='flex flex-col space-y-5'>
          <li className='flex'>
            <div className='font-mono font-semibold'>2022/03</div>
            <span className='ml-12'>静岡大学人文社会科学部を卒業</span>
          </li>
          <li className='flex'>
            <div className='font-mono font-semibold'>2022/04</div>
            <span className='ml-12'>新卒で某大手ディスカウントショップに入社し、消耗品の販売、在庫管理、プロモーション、接客などの業務に従事</span>
          </li>
          <li className='flex'>
            <div className='font-mono font-semibold'>2022/12</div>
            <span className='ml-12'>小売業での体験で将来への不安を実感し、より仕事の選択肢が広く、汎用性の高いスキルを身につけるべく、プログラミング学習をスタート</span>
          </li>
          <li className='flex'>
            <div className='font-mono font-semibold'>2023/07</div>
            <span className='ml-12'>某派遣エンジニア事業大手に転職</span>
          </li>
          <li className='flex'>
            <div className='font-mono font-semibold'>2024/01</div>
            <span className='ml-12'>研修期間が終了し、配属先を探す段階に入るが、なかなか決められず、スキルアップ期間として過ごした</span>
          </li>
          <li className='flex'>
            <div className='font-mono font-semibold'>2024/04</div>
            <span className='ml-12'>配属に巡って会社の対応に不信感を抱き、再度転職活動を開始</span>
          </li>
          <li className='flex'>
            <div className='font-mono font-semibold'>2024/06</div>
            <span className='ml-12'>他派遣エンジニア事業大手に転職し、配属先も決定</span>
          </li>
          <li className='font-mono font-semibold'>To be continued...</li>
        </ul>
      </div>

      {/* 下部余白 */}
      <div className='h-[200px]'></div>
    </div>
  )
}

export default About
