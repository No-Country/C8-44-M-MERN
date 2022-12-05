import { BASE_URL } from './config';
import axios from 'axios';

const getHabits = async () => {
   try {
      const response = await axios.get(
         `https://c8-44-m-mern-production-32dc.up.railway.app/api/habits`
      );
      return response.data;
   } catch (error) {
      console.log(error);
   }
};
const getHabitbyId = async (id: string) => {
   try {
      const response = await axios.get(
         `https://c8-44-m-mern-production-32dc.up.railway.app/api/habits/${id}`
      );
      return response.data;
   } catch (error) {
      console.log(error);
   }
};

const habitsService = {
   getHabits,
   getHabitbyId,
};
export default habitsService;
