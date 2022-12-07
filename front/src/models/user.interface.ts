import { Friend } from './friend.interface';
import { Habit } from './habit.interface';

export interface BasicUser {
  email: string;
  password?: string;
}

export interface User extends BasicUser {
  _id: string;
  username: string;
  fullname: string;
  avatar: string;
  rol: string;
  followers: Friend[];
  habits: Habit[];
  healthExperience: number;
  educationExperience: number;
  experience: number;
}
