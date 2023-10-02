import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Mise à jour de l'importation

import App from './App'; // Votre composant principal

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

