import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Assuming App is a .jsx or .js file, this will work fine.
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
