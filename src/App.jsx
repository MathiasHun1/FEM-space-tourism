import { useState } from 'react';
import logoSVG from '/images/shared/logo.svg';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="app bg-dark text-white d-grid">
      <a href="#main" className="skip-to-content">
        Skip to content
      </a>
      <header className="primary-header d-flex gap-sm">
        <div className="logo">
          <img src={logoSVG} alt="" />
        </div>

        <button className="sr-only" aria-controls="primary-navigation">
          Open
        </button>

        <nav className="text-preset-8">
          <ul
            id="primary-navigation"
            className="primary-nav underline-indicators text-white d-flex gap-md"
            data-nav-visible={menuOpened}
            aria-expanded={menuOpened}
          >
            <li className="numbered-title active">
              <span aria-hidden="true">00</span>
              <a href="">Home</a>
            </li>

            <li className="numbered-title">
              <span aria-hidden="true">01</span>
              <a href="">Destination</a>
            </li>

            <li className="numbered-title">
              <span aria-hidden="true">02</span>
              <a href="">Crew</a>
            </li>

            <li className="numbered-title">
              <span aria-hidden="true">03</span>
              <a href="">Technology</a>
            </li>
          </ul>
        </nav>

        <button
          className="mobile-nav-toggle"
          onClick={() => setMenuOpened(!menuOpened)}
          data-nav-toggle={menuOpened}
        ></button>
      </header>

      <main id="main" className="main">
        <div className="grid-container grid-container--home wrapper">
          <div>
            <h1 className="text-preset-5 uppercase">
              So, you want to travel to{' '}
              <span className="text-preset-1 text-white d-block">Space</span>
            </h1>
            <p className="text-light text-preset-9">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div>
            <a className="button-big text-preset-4 text-dark" href="">
              Explore
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
