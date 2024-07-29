import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Crear un contenedor raíz y renderizar el componente App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
