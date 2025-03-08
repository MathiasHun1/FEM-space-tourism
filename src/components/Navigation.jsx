import { NavLink } from 'react-router';

const Navigation = ({ menuOpened }) => {
  return (
    <nav className="text-preset-8">
      <ul
        id="primary-navigation"
        className="primary-nav d-flex"
        data-nav-visible={menuOpened}
        aria-expanded={menuOpened}
      >
        <li className="numbered-title">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? ' active' : '')}
          >
            <span aria-hidden="true">00</span>
            Home
          </NavLink>
        </li>

        <li className="numbered-title">
          <NavLink
            to="/destination"
            className={({ isActive }) => (isActive ? ' active' : '')}
          >
            <span aria-hidden="true">01</span>
            Destination
          </NavLink>
        </li>

        <li className="numbered-title">
          <NavLink
            to="/crew"
            className={({ isActive }) => (isActive ? ' active' : '')}
          >
            <span aria-hidden="true">02</span>
            Crew
          </NavLink>
        </li>

        <li className="numbered-title">
          <NavLink
            to="/technology"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <span aria-hidden="true">03</span>
            Technology
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
