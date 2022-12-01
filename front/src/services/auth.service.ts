
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Jwt, NewUser, User } from '../models';

// import { NewUser } from '../models/NewUser';

// const register = async (newUser: NewUser): Promise<DisplayUser | null> => {
//   const response = await axios.post(
//     `${process.env.REACT_APP_BASE_API}/auth/register`,
//     newUser
//   );

//   return response.data;
// };
const register = async (user: NewUser): Promise<User | null> => {
   const response = await axios.post(
      'https://c8-44-m-mern-production-4f57.up.railway.app/api/user/register',
      user
   );
   console.log(response);
   return response.data;
};
const login = async (user: User): Promise<{ jwt: Jwt }> => {
   try {
      const response = await axios.post(
         `https://c8-44-m-mern-production-4f57.up.railway.app/api/user/login`,
         user
      );
      if (response.data) {
         localStorage.setItem('jwt', JSON.stringify(response.data.token));
      }
      return { jwt: response.data };
   } catch (error) {
      console.log(error);
      return { jwt: null };
   }
};

const logout = (): void => {
   localStorage.removeItem('user');
   localStorage.removeItem('jwt');
=======
import { Jwt, User } from '../models';

import { BASE_URL } from './config';
import axios from 'axios';

const login = async (user: User): Promise<{ jwt: string | null }> => {
  try {
    const response = await axios.post(`${BASE_URL}/user/login`, user);
    if (response.data) {
      localStorage.setItem('jwt', JSON.stringify(response.data));
    }
    return { jwt: response.data };
  } catch (error) {
    console.log(error);
    return { jwt: null };
  }
};

const logout = (): void => {
  localStorage.removeItem('jwt');

};

const authService = {
   register,
   login,
   logout,
};

export default authService;
