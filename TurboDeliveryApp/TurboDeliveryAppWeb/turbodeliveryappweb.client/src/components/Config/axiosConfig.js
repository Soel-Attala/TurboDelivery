// src/config/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
    baseURL: '/api', // Esto se combinar� con las rutas espec�ficas de tu backend
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

export default instance;
