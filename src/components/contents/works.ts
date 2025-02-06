
export type PortfolioItemProps = {
  imageSrc: string;
  title: string;
  description: string;
  hasGithub: boolean;
  hasQiita: boolean;
  githubLink?: string;
  qiitaLink?: string;
}

export const sites: PortfolioItemProps[] = [
  {
    imageSrc: '', title: 'ポートフォリオサイト', description: 'next.jsメインで作成', 
    hasGithub: true, hasQiita: false, 
    githubLink: ''
  },
];

export const apps: PortfolioItemProps[] = [
  {
    imageSrc: '', title: 'Blue Appointment', description: 'ブルアカ助っ人マッチングアプリ', 
    hasGithub: true, hasQiita: true, 
    githubLink: '', qiitaLink: ''
  },
  {
    imageSrc: '', title: 'Black Jack', description: 'シンプルなブラックジャックゲーム', 
    hasGithub: true, hasQiita: false, 
    githubLink: '', 
  },
];

export const progs: PortfolioItemProps[] = [

];

