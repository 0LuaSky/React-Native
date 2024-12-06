import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 10000, // Define um limite de tempo para as requisições
});

// Interceptador para tratar erros
api.interceptors.response.use(
  response => response,
  error => {
    console.error('Erro na requisição:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
