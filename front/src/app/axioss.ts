import axios from 'axios';

export const getAlls =  () => {
   axios.get('https://c8-44-m-mern-production.up.railway.app/api/habits');
}