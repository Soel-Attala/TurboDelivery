// src/config/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
    baseURL: '/api', // Esto se combinará con las rutas específicas de tu backend
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

export default instance;
