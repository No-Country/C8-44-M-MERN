import { BASE_URL } from './config';
import { User } from '../models';
import axios from 'axios';

const register = async (user: User): Promise<{ jwt: string | null }> => {
  try {
    const response = await axios.post(
       `https://c8-44-m-mern-production-32dc.up.railway.app/api/user/register`,
       user
    );
    if (response.data) {
      localStorage.setItem('jwt', JSON.stringify(response.data));
    }
    console.log(response.data);
    
    return { jwt: response.data };
  } catch (error) {
    console.log(error);
    return { jwt: null };
  }
};

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

const authService = {
  register,
  login,
};

export default authService;
