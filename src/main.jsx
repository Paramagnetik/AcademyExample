import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import './index.css';
import './fix-mobile.css';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <HashRouter basename="/AcademyExample">
    <App />
  </HashRouter>
);
