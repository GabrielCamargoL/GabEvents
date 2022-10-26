import axios from 'axios';

const aws = axios.create({
  baseURL: 'http://3.217.88.73:10000'
});

export default aws;