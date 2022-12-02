import { BASE_URL } from './config';
import axios from 'axios';
import { Habit } from '../models';

const createHabit = async (habit: Habit) => {
    try {
        const response = await axios.post(`${BASE_URL}/habit/create`, habit);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
const createHabitService = {
        createHabit    
}
export default createHabitService;