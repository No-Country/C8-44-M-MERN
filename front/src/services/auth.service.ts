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
  login,
  logout,
};

export default authService;
