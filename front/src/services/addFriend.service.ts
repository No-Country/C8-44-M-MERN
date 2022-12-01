import axios from 'axios';

const getAll = async () => {
   // let jwt = JSON.parse(localStorage.getItem('jwt') || '{}');
   try {
      const response = await axios.get(
         `https://c8-44-m-mern-production-4f57.up.railway.app/api/user`,
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
const addFriendService = {
   getAll,
};
export default addFriendService;