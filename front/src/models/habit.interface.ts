export interface BasicHabit {
  name: string;
  description: string;
  category: string;
  frequency: string;
}

export interface Habit extends BasicHabit {
  _id: string;
  experience: number;
  isDone: boolean;
}
