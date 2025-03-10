import image from '/images/technology/image-launch-vehicle-landscape.jpg';

const Technology = () => {
  return (
    <div className="grid-container grid-container--technology wrapper flow flow-gap-lg">
      <h1 className="numbered-title text-preset-5 uppercase">
        <span>03</span>Space launch 101
      </h1>

      <div className="tecnology-image-wrapper">
        <img src={image} alt="" />
      </div>

      <article className="">
        <div className="flow flow-gap-sm">
          <header className="">
            <h2 className="text-preset-4 uppercase">The terminology...</h2>
            <p className="text-preset-3 uppercase nowrap">Space capsule</p>
          </header>
          <p className="text-preset-9 text-light">
            A space capsule is an often-crewed spacecraft that uses a blunt-body
            reentry capsule to reenter the Earth's atmosphere without wings. Our
            capsule is where you'll spend your time during the flight. It
            includes a space gym, cinema, and plenty of other activities to keep
            you entertained.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Technology;
