import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/main.scss';
import DesignSystem from './components/DesignSystem.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <DesignSystem /> */}
  </StrictMode>
);
