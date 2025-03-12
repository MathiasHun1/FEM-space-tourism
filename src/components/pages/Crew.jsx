import React, { useState } from 'react';

import data from '../../data.json';
import image from '/images/crew/image-douglas-hurley.png';

const Crew = () => {
  const [currentData, setCurrentData] = useState(data.crew[0]);
  const [activeMember, setActiveMember] = useState(data.crew[0].name);

  const handleClick = (e) => {
    const dataKey = e.currentTarget.dataset.crew;
    const dataToRender = data.crew.find((m) => m.name === dataKey);

    setActiveMember(dataToRender.name);
    setCurrentData(dataToRender);
  };

  if (!currentData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid-container grid-container--crew wrapper">
      <h1 className="crew-title numbered-title text-preset-5 uppercase">
        <span>02</span> Meet your crew
      </h1>

      <article className="crew-article">
        <header className="crew-subheader">
          <h2 className="text-preset-4 uppercase">{currentData.role}</h2>
          <p className="text-preset-3 uppercase">{currentData.name}</p>
        </header>
        <p className="text-preset-9 text-light">{currentData.bio}</p>
      </article>

      <div className="pagination-small d-flex gap-sm">
        {data.crew.map((member) => (
          <button
            key={member.name}
            data-crew={member.name}
            onClick={handleClick}
            className={`${activeMember === member.name ? 'active' : ''}`}
          >
            <span className="sr-only">The commander</span>
          </button>
        ))}
      </div>

      <div className="crew-image-wrapper">
        <img src={currentData.images.png} alt="" />
      </div>
    </div>
  );
};

export default Crew;
