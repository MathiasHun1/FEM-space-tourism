import image from '/images/technology/image-launch-vehicle-landscape.jpg';

import data from '../../data.json';
import { useState } from 'react';

const Technology = () => {
  const [currentData, setCurrentData] = useState(data.technology[0]);
  const [activeTech, setActiveTech] = useState(data.technology[0].name);

  const handleClick = (e) => {
    const dataKey = e.currentTarget.dataset.tech;
    const dataToRender = data.technology.find((t) => t.name === dataKey);

    setCurrentData(dataToRender);
    setActiveTech(dataToRender.name);
  };

  return (
    <div className="grid-container--technology wrapper">
      <h1 className="numbered-title text-preset-5 uppercase">
        <span>03</span>Space launch 101
      </h1>

      <div className="tecnology-image-wrapper">
        <picture>
          <source
            srcset={currentData.images.landscape}
            media="(max-width: 45rem)"
          />

          <img src={currentData.images.portrait} alt="" />
        </picture>
      </div>

      <article className="tech-article wrapper d-flex">
        <div className="pagination-big d-flex gap-sm">
          {data.technology.map((tech) => (
            <button
              key={tech.name}
              data-tech={tech.name}
              className={`${tech.name === activeTech ? 'active' : ''}`}
              onClick={handleClick}
            >
              <span className="sr-only">{`The ${tech.name}`}</span>
              {data.technology.indexOf(tech) + 1}
            </button>
          ))}
        </div>
        <div className="">
          <header className="">
            <h2 className="text-preset-4 uppercase">The terminology...</h2>
            <p className="text-preset-3 uppercase nowrap">{currentData.name}</p>
          </header>
          <p className="text-preset-9 text-light">{currentData.description}</p>
        </div>
      </article>
    </div>
  );
};

export default Technology;
