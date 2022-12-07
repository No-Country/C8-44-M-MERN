import { BASE_URL } from './config';
import { Habit } from '../models';
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

const getHabitById = async (id: string) => {
  const jwt = localStorage.getItem('jwt');
  const parsedJwt = jwt && JSON.parse(jwt);
  try {
    const response = await axios.get(`${BASE_URL}/habits/${id}`, {
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

const createHabit = async (habit: Habit) => {
  try {
    const response = await axios.post(`${BASE_URL}/habit/create`, habit);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const habitsService = {
  getHabits,
  getHabitById,
  createHabit,
};
export default habitsService;
