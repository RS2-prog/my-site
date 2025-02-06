import React from "react";
import { PortfolioItemProps } from "./works";


const PortfolioItem: React.FC<PortfolioItemProps> = ({
  imageSrc,
  title,
  description,
  hasGithub,
  hasQiita,
  githubLink,
  qiitaLink,
}) => {
  return (
    <div className="flex flex-col items-center border border-gray-300 p-4 rounded-lg shadow-md w-80">
      {/* サムネイル画像 */}
      <img src={imageSrc} alt={title} className="w-full aspect-video border border-gray-200" />
      
      {/* タイトル */}
      <h2 className="mt-4 text-lg font-semibold">{title}</h2>
      
      {/* 説明 */}
      <p className="mt-2 text-gray-600 text-center">{description}</p>
      
      {/* リンク要素 */}
      <div className="mt-4 flex space-x-4 h-6">
        {hasGithub && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img src="/static/icon/github-mark.png" alt="Github" className='w-5 h-5 mr-2 hover:scale-110 transition duration-500'/>
          </a>
        )}
        {hasQiita && (
          <a href={qiitaLink} target="_blank" rel="noopener noreferrer">
            <img src="/static/icon/qiita-icon.png" alt="Github" className='w-5 h-5 mr-2 hover:scale-110 transition duration-500'/>
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
