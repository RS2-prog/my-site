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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-700 hover:text-black"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.839 9.49.5.091.681-.217.681-.482 0-.237-.009-.866-.014-1.7-2.782.603-3.369-1.34-3.369-1.34-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.068-.608.068-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.088 2.91.833.091-.647.349-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.03-2.682-.103-.253-.447-1.268.098-2.64 0 0 .84-.269 2.75 1.025A9.52 9.52 0 0 1 12 6.837c.85.004 1.705.114 2.502.333 1.91-1.294 2.75-1.025 2.75-1.025.546 1.372.202 2.387.099 2.64.641.699 1.029 1.591 1.029 2.682 0 3.844-2.339 4.687-4.566 4.936.359.31.678.919.678 1.852 0 1.338-.012 2.417-.012 2.744 0 .268.18.577.687.481A10.003 10.003 0 0 0 22 12c0-5.52-4.48-10-10-10Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        )}
        {hasQiita && (
          <a href={qiitaLink} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-green-500 hover:text-green-700"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.6-13H11v5.27l4.22 2.52.78-1.29-3.4-2.04V7z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
