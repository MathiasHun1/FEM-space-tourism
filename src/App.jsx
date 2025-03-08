import { useState } from 'react';
import { Routes, Route, Link } from 'react-router';
import logoSVG from '/images/shared/logo.svg';

import Navigation from './components/Navigation';
import Home from './components/Home';

const App = () => {
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

        <Navigation menuOpened={menuOpened} />

        <button
          className="mobile-nav-toggle"
          onClick={() => setMenuOpened(!menuOpened)}
          data-nav-toggle={menuOpened}
        ></button>
      </header>

      <main id="main" className="main">
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/destination" element={<div>Destination</div>} />
          <Route path="/crew" element={<div>crew</div>} />
          <Route path="/technology" element={<div>technology</div>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
