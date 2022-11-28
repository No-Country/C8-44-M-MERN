import axios from 'axios';
const data = async () => {
   let jwt = await JSON.parse(localStorage.getItem('jwt') || '{}');
   console.log(jwt);
   

   try {
      const response = await axios.get(
         `https://c8-44-m-mern-production.up.railway.app/api/user/me`,
         {
            headers: {
               'Content-Type': 'application/json',
               Authorization: `JWT ${jwt}`,
            },
         }
      );
      return response.data;
   } catch (error) {
      console.log(error);
   }
};
// const deleteData = async (id: string) => {
//    let jwt = JSON.parse(localStorage.getItem('jwt') || '{}');
//    try {
//       const response = await axios.delete(
//          `https://c8-44-m-mern-production.up.railway.app/api/user/${id}`,
//          {
//             headers: {
//                'Content-Type': 'application/json',

// }
const dataService = {
   data,
};
export default dataService;
