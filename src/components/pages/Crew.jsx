import React, { useState } from 'react';
import { motion } from 'motion/react';
import data from '../../data.json';

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

      <motion.article
        className="crew-article"
        key={currentData.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
        }}
      >
        <header className="crew-subheader">
          <h2 className="text-preset-4 uppercase">{currentData.role}</h2>
          <p className="text-preset-3 uppercase">{currentData.name}</p>
        </header>
        <p className="text-preset-9 text-light">{currentData.bio}</p>
      </motion.article>

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

      <motion.div
        className="crew-image-wrapper"
        key={currentData.role}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
        }}
      >
        <img src={currentData.images.png} alt="" />
      </motion.div>
    </div>
  );
};

export default Crew;
