import axios from 'axios';

export const getQount = () => {
  return axios.get('/qounter').then((qount) => qount);
};

export const setQount = (q) => {
  return axios.post('/users', { id: 4, name: "5sasha" }).then((resp) => resp);
};
