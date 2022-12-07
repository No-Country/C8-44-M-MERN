import { BASE_URL } from './config';
import axios from 'axios';

const getAll = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const usersService = {
  getAll,
};
export default usersService;
