import data from '../../data.json';
import { useState } from 'react';
import { motion } from 'motion/react';

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
    <div className="grid-container grid-container--technology">
      <h1 className="numbered-title text-preset-5 uppercase">
        <span>03</span>Space launch 101
      </h1>

      <motion.picture
        className="tecnology-image-wrapper"
        key={currentData.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
        }}
      >
        <source
          srcSet={currentData.images.landscape}
          media="(max-width: 80rem)"
        />
        <source
          srcSet={currentData.images.portrait}
          media="(min-width: 80rem)"
        />

        <img src={currentData.images.landscape} alt="" />
      </motion.picture>

      <article
        className="tech-article d-flex"
        key={currentData.description}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
        }}
      >
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
        <motion.div
          className=""
          key={currentData.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
          }}
        >
          <header className="">
            <h2 className="text-preset-4 uppercase">The terminology...</h2>
            <p className="text-preset-3 uppercase ">{currentData.name}</p>
          </header>
          <p className="tech-description text-preset-9 text-light">
            {currentData.description}
          </p>
        </motion.div>
      </article>
    </div>
  );
};

export default Technology;
