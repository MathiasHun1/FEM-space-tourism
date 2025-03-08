import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.jsx';
import './styles/main.scss';
import DesignSystem from './components/DesignSystem.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      {/* <Route path="/app/*" element={<App />} />
        <Route path="/design" element={<DesignSystem />} /> */}
    </BrowserRouter>
  </StrictMode>
);
