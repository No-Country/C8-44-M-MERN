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
const getHabitById = async (id: string) => {
  const jwt = localStorage.getItem('jwt');
  const parsedJwt = jwt && JSON.parse(jwt);
  try{
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

}

const habitsService = {
   getHabits,
   getHabitById,
};
export default habitsService;
