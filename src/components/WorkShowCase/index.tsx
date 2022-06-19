import React from 'react';

interface WorkProps {
  work: {
    title: string,
    description: string,
    website: {
      live: boolean,
      demo: boolean,
      url: string,
    },
    github: {
      url: string,
      private: boolean,
    },
    asset: string,
  }
}

const WorkShowCase: React.FC<WorkProps> = ({ work }) => {
  const {
    title,
    description,
    website,
    github,
    asset,
  } = work;

  let websiteBtn;

  if (website.live) {
    websiteBtn = 'Live Site';
  } else if (website.demo) {
    websiteBtn = 'Demo';
  } else {
    websiteBtn = 'Demo Not Available :(';
  }

  return (
    <div className="flex flex-col p-6 m-4 rounded-xl shadow-lg bg-white">
      <div className="flex justify-center w-full h-[120px] mb-4">
        <img
          alt={title}
          src={asset}
          className="w-[80%] object-contain"
        />
      </div>
      <div className="h-[240px] md:h-[190px] text-center">
        <h3 className="text-gray-400 font-bold">{title}</h3>
        <p>{description}</p>
        <div className="absolute bottom-6 left-0 right-0">
          <button
            type="button"
            className="w-[120px] h-[30px] text-base rounded-lg shadow-md mr-2 hover:shadow-xl transition-all hover:text-white"
            disabled={!(website.live || website.demo)}
          >
            {(website.live || website.demo)
              ? <a href={website.url}>{websiteBtn}</a>
              : websiteBtn}
          </button>
          <button
            type="button"
            className={`w-[120px] h-[30px] text-base rounded-lg shadow-md ${github.private ? 'opacity-60' : 'hover:shadow-xl transition-all hover:text-white'}`}
            disabled={github.private}
          >
            {github.private
              ? 'Private Repo'
              : <a href={github.url}>Source Code</a>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkShowCase;
