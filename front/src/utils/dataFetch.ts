import axios from 'axios';
import { setToken } from '../redux/features';
import { useAppDispatch } from '../redux/hooks';

export const getUser = (token: string) => {
  axios
    .get('https://c8-44-m-mern-production.up.railway.app/api/me')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
};

export const postLogin = (email: string, password: string) => {
  axios
    .post('https://c8-44-m-mern-production.up.railway.app/api/user/login', {
      email,
      password,
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error.response.data));
};
