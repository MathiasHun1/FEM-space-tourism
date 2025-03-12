import { NavLink } from 'react-router';

const Home = () => {
  return (
    <div className="grid-container grid-container--home">
      <div className="home-content">
        <h1 className="text-preset-5 uppercase">
          So, you want to travel to{' '}
          <span className="text-preset-1 text-white d-block">Space</span>
        </h1>
        <p className="text-light text-preset-9">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="explore-btn">
        <NavLink
          to={'/destination'}
          className="button-big text-preset-4 text-dark"
        >
          Explore
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
