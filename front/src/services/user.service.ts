import { BASE_URL } from './config';
import { User } from '../models';
import axios from 'axios';

const getData = async () => {
  const jwt = localStorage.getItem('jwt');
  const parsedJwt = jwt && JSON.parse(jwt);
  try {
    const response = await axios.get(`${BASE_URL}/user/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${parsedJwt}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const register = async (user: User) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/register`, user);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// const deleteData = async (id: string) => {
//    let jwt = JSON.parse(localStorage.getItem('jwt') || '{}');
//    try {
//       const response = await axios.delete(
//          `https://c8-44-m-mern-production.up.railway.app/api/user/${id}`,
//          {
//             headers: {
//                'Content-Type': 'application/json',
// }

const userService = {
  getData,
  register,
};

export default userService;
