
export type PortfolioItemProps = {
  imageSrc: string;
  title: string;
  description: string;
  hasGithub: boolean;
  hasQiita: boolean;
  githubLink?: string;
  qiitaLink?: string;
  detail: PortfolioDetailProps;
}

export type PortfolioDetailProps = {
  skills: string;
  points: string[];
  description: string;
}

export const sites: PortfolioItemProps[] = [
  {
    imageSrc: '/static/thumbnail/portfolio.webp', title: 'ポートフォリオサイト', description: 'next.jsメインで作成', 
    hasGithub: true, hasQiita: false, 
    githubLink: 'https://github.com/RS2-prog/my-site.git',
    detail: {
      skills: 'TypeScript, React, Next.js, AWS S3, AWS CloudFront',
      points: ['Motionによるアニメーション表現', 'Visxによるグラフ描画', 'CloudFrontで静的ウェブサイト配信',],
      description: [
        'Next.jsで作成され、AWS S3 + CloudFrontで配信しています。',
        'デザインもできるフルスタックを目指しているため、一般的なエンジニアのポートフォリオサイトより見た目にこだわりました。',
        'また、NestSEOを使用して簡単なSEO対策も行いました。',
        '配信はAWSを利用し、S3バケットでリソースを管理し、CloudFrontとRoute53で専用ドメインで配信しています。',
        '好きな技術がたくさん使えて作っていてとても楽しかったですが、S3の無料枠を節約するために、予定から色々削らないといけなかったことが残念です。',
      ].join(''),
    }
  },
];

export const apps: PortfolioItemProps[] = [
  {
    imageSrc: '/static/thumbnail/blueappointment.webp', title: 'Blue Appointment', description: 'ブルアカ助っ人マッチングアプリ', 
    hasGithub: true, hasQiita: false, 
    githubLink: 'https://github.com/RS2-prog/ProjectBA.git',
    detail: {
      skills: 'TypeScript, React, Python, Django',
      points: ['Reactを活用した動的テーブル操作', 'DRFによるトークン認証、認可', 'AxiosインスタンスによるAPI呼び出し',],
      description: [
        '本格的なサービス化を視野に入れて作成したSPAですが、権利やコストなどの理由で断念。',
        'Django Rest Frameworkを利用したAPIと、Reactで作成されたUIを提供しており、一般的な業務システムが使いそうな処理は大体網羅しているはずです。',
        '自身もユーザーになる予定だったため、かなりユーザー目線での開発ができていたと思います。',
        'その分、要件分析とUIの分かりやすさが大きな課題になっていました。',
        '結果的にサービス化ができなかったものの、スムーズでシンプルな操作感と直感的な遷移ルートを実現できたので、練習としては満足できる成果になりました。',
      ].join(''),
    }
  },
  {
    imageSrc: '/static/thumbnail/blackjack.webp', title: 'Black Jack', description: 'シンプルなブラックジャックゲーム', 
    hasGithub: true, hasQiita: false, 
    githubLink: 'https://github.com/RS2-prog/black-jack-sample.git',
    detail: {
      skills: 'TypeScript, React, Next.js',
      points: ['TailwindによるUI作成', 'フェーズ管理と判定ロジック'],
      description: [
        'Next.jsのApp Routerを試そうとしてついでに作ったカードゲームです。',
        '意外と出来栄えが良さそうなので載せることにしました。',
        'カードコンポーネントを重ねてデッキを作成するのと、ゲームルールを処理として表現するのが楽しかったです。',
      ].join(''),
    }
  },
];

export const progs: PortfolioItemProps[] = [

];

