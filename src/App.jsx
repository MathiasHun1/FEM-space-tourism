import { Routes, Route, Navigate, useLocation } from 'react-router';

import Home from './components/pages/Home';
import Destination from './components/pages/Destination';
import Crew from './components/pages/Crew';
import Technology from './components/pages/Technology';
import Header from './components/Header';

const App = () => {
  const location = useLocation().pathname.slice(1);

  return (
    <div className={`app bg-dark text-white d-grid ${location}`}>
      <a href="#main" className="skip-to-content">
        Skip to content
      </a>

      <Header />

      <main id="main" className="main">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
