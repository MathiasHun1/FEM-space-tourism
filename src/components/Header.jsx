import { useState } from 'react';
import logoSVG from '/images/shared/logo.svg';
import Navigation from './Navigation';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <header className="primary-header d-flex gap-sm">
      <div className="logo">
        <img src={logoSVG} alt="" />
      </div>

      <button className="sr-only" aria-controls="primary-navigation">
        Open
      </button>

      <Navigation menuOpened={menuOpened} setMenuOpened={setMenuOpened} />

      <button
        className="mobile-nav-toggle"
        onClick={() => setMenuOpened(!menuOpened)}
        data-nav-toggle={menuOpened}
      ></button>
    </header>
  );
};

export default Header;
