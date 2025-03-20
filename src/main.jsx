// src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Usamos BrowserRouter
import App from './App';  // Importamos App

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>  {/* Aquí está el único BrowserRouter en la aplicación */}
    <App />
  </BrowserRouter>
);
