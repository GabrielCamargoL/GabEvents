import axios from 'axios';

// const local = 'http://localhost:3333'

const heroku = 'https://gabevents.herokuapp.com'

const aws = 'http://3.217.88.73:10000'

const api = axios.create({
  baseURL: heroku
});

export default api;