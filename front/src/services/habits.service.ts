import axios from 'axios';

const habits = async () => {
   let jwt = JSON.parse(localStorage.getItem('jwt') || '{}');
   try {
      const response = await axios.get(
         `https://c8-44-m-mern-production.up.railway.app/api/habits`,
         {
            headers: {
               'Content-Type': 'application/json',
            },
         }
      );
      return response.data;
   } catch (error) {
      console.log(error);
   }
};

const habitsService = {
   habits,
};
export default habitsService;
