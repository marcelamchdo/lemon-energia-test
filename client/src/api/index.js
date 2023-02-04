import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000',
});

const post = async (obj) => {
  try {
    // console.log(obj)
    const response = await API.post('/', obj);
    // console.log(response)
    return response.data;
  } catch (error) {
    return error.stack
  }
}

const getAll = () => API.get('/')

export { post, getAll}; 