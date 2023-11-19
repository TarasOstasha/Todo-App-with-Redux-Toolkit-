import axios from 'axios';

const axiosInstance1 = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getPosts = () => axiosInstance1.get('/posts');

export const getUsers = () => axiosInstance1.get('/users');
