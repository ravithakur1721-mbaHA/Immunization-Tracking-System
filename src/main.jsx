import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// This finds the <div id="root"> in your index.html and renders App inside it
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);