import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000',
});

const post = async (obj) => {
  try {
    const response = await API.post('/', obj);
    return response.data;
  } catch (error) {
    return error.stack
  }
}

const getAll = () => API.get('/')

export { post, getAll}; 