import { BASE_URL } from './config';
import axios from 'axios';
import { toast } from 'react-toastify';

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

const createHabit = async (habit: any) => {
  const jwt = localStorage.getItem('jwt');
  const parsedJwt = jwt && JSON.parse(jwt);
  try {
    const response = await axios.put(`${BASE_URL}/habits/user`, habit, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${parsedJwt}`,
      },
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const addHabit = async (habitId: string) => {
  const jwt = localStorage.getItem('jwt');
  const parsedJwt = jwt && JSON.parse(jwt);
  try {
    const response = await axios.put(
      `${BASE_URL}/habits/add`,
      { id: habitId },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${parsedJwt}`,
        },
      }
    );

    return response.data.data;
  } catch (error: any) {
    throw new Error(error.response.data.msg);
  }
};

const checkHabit = async (habitId: string) => {
  const jwt = localStorage.getItem('jwt');
  const parsedJwt = jwt && JSON.parse(jwt);
  try {
    const response = await axios.put(
      `${BASE_URL}/habits/user/${habitId}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${parsedJwt}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const userService = {
  getData,
  createHabit,
  addHabit,
  checkHabit,
};

export default userService;
