import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api', // Aseg�rate de que la URL base sea correcta
});

export default instance;
