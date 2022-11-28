import axios from 'axios';

const getHabits = async () => {
   try {
      const response = await axios.get(
         `https://c8-44-m-mern-production.up.railway.app/api/habits`,
      );
      return response.data;
   } catch (error) {
      console.log(error);
   }
};
const habitsService = {
   getHabits,
};
export default habitsService;
