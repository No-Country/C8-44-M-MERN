import axios from 'axios';
import { BASE_URL } from './config';

const getAll = async () => {
   // let jwt = JSON.parse(localStorage.getItem('jwt') || '{}');
   try {
      const response = await axios.get(
         `https://c8-44-m-mern-production-32dc.up.railway.app/api/user`
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