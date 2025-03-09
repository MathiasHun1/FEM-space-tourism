import React, { useEffect, useState } from 'react';

import data from '../../data.json';

const Destination = () => {
  const [currentData, setCurrentData] = useState(null);
  const [activeDestination, setActiveDestination] = useState(null);

  useEffect(() => {
    setCurrentData(data.destinations[0]);
    setActiveDestination(data.destinations[0].name);
  }, []);

  const handleClick = (e) => {
    const dataKey = e.target.dataset.destination;
    const dataToRender = data.destinations.find((d) => d.name === dataKey);

    setCurrentData(dataToRender);
    setActiveDestination(dataToRender.name);
  };

  if (!currentData) {
    return <div>LOADING...</div>;
  }

  return (
    <div className="grid-container grid-container--destination wrapper flow">
      <h1 className="numbered-title text-preset-5 uppercase">
        <span>01</span> Pick your destination
      </h1>

      <img src={currentData.images.png} alt="" />

      <div className="tablist underline-indicators d-flex gap-md text-white">
        {data.destinations.map((des) => (
          <button
            key={des.name}
            onClick={handleClick}
            data-destination={des.name}
            className={`text-preset-8 uppercase text-white ${
              activeDestination === des.name ? 'active' : ''
            }`}
          >
            {des.name}
          </button>
        ))}
      </div>

      <article className="destination-info flow">
        <h2 className="text-preset-2 uppercase">{currentData.name}</h2>
        <p className="text-preset-9 text-light">{currentData.description}</p>
        <div className="destination-meta d-flex">
          <div>
            <h3 className="text-preset-7 text-light uppercase">
              Avg. distance
            </h3>
            <p className="text-preset-6 uppercase">{currentData.distance}</p>
          </div>
          <div>
            <h3 className="text-preset-7 text-light uppercase">
              Est. travel time
            </h3>
            <p className="text-preset-6 uppercase">{currentData.travel}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Destination;
