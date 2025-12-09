import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import './index.css';
import './fix-mobile.css';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const basename = process.env.NODE_ENV === 'production' ? '/AcademyExample' : '';

root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
