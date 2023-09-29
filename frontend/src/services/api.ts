import axios from 'axios';

// const local = 'http://localhost:3333'

const render = 'https://gabevents.onrender.com'

const api = axios.create({
  baseURL: render
});

export default api;