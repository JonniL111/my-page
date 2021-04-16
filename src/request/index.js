import axios from 'axios';

export const setQount = (user) => {
  return axios({
    method: 'post',
    url: '/user',
    data: user,
  }).then((resp) => resp);
};

export const getIp = () => {
  return axios({
    method: 'get',
    url: 'https://ipapi.co/json/',
  }).then((data) => data.data.ip);
};
