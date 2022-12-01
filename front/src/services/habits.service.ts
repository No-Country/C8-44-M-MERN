import { BASE_URL } from './config';
import axios from 'axios';

const getHabits = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/habits`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const habitsService = {
  getHabits,
};
export default habitsService;
