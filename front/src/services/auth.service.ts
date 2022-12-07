import { BASE_URL } from './config';
import { BasicUser } from '../models/user.interface';
import { User } from '../models';
import axios from 'axios';

const register = async (user: BasicUser): Promise<{ jwt: string | null }> => {
  try {
    const response = await axios.post(`${BASE_URL}/user/register`, user);
    if (response.data) {
      localStorage.setItem('jwt', JSON.stringify(response.data.token));
    }
    return { jwt: response.data.token };
  } catch (error) {
    console.log(error);
    return { jwt: null };
  }
};

const login = async (user: BasicUser): Promise<{ jwt: string | null }> => {
  try {
    const response = await axios.post(`${BASE_URL}/user/login`, user);
    if (response.data.token) {
      localStorage.setItem('jwt', JSON.stringify(response.data.token));
    }
    return { jwt: response.data.token };
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
