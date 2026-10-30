import React from 'react';
import { createRoot } from 'react-dom/client';
// Base tokens first so component stylesheets can override shared primitives.
import './styles/base.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
