
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
    imageSrc: '/static/thumbnail/portfolio.webp', title: 'ポートフォリオサイト', description: 'next.jsメインで作成', 
    hasGithub: true, hasQiita: false, 
    githubLink: 'https://github.com/RS2-prog/my-site.git'
  },
];

export const apps: PortfolioItemProps[] = [
  {
    imageSrc: '/static/thumbnail/blueappointment.webp', title: 'Blue Appointment', description: 'ブルアカ助っ人マッチングアプリ', 
    hasGithub: true, hasQiita: true, 
    githubLink: 'https://github.com/RS2-prog/ProjectBA.git', qiitaLink: ''
  },
  {
    imageSrc: '/static/thumbnail/blackjack.webp', title: 'Black Jack', description: 'シンプルなブラックジャックゲーム', 
    hasGithub: true, hasQiita: false, 
    githubLink: 'https://github.com/RS2-prog/black-jack-sample.git', 
  },
];

export const progs: PortfolioItemProps[] = [

];

