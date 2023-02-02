import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001/',
});

const post = async (obj) => {
  try {
    const response = await API.post('/', obj);
    console.log(response);
    return response;
  } catch (error) {
    return error.stack
  }
}

export default post; 