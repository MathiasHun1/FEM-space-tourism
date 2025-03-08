import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router';
import logoSVG from '/images/shared/logo.svg';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Destination from './components/Destination';

const App = () => {
  const location = useLocation().pathname.slice(1);

  useEffect(() => {}, [location]);

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className={`app bg-dark text-white d-grid ${location}`}>
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
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<div>crew</div>} />
          <Route path="/technology" element={<div>technology</div>} />

          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
