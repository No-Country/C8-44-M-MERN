import { ExperienceRing, Header } from '../../components';

import { Details } from './components';
import { tempColorAssing } from '../../utils/changeColor';
import { useParams } from 'react-router-dom';

type Habit = {
  id: number;
  habitName: string;
  frequency: string;
  category: string;
  description: string;
  priority: number;
  experience: {
    progress: number;
    level: number;
  };
};
const habitsList: Habit[] = [
  {
    id: 1,
    habitName: 'Brush your teeth',
    frequency: 'once a day',
    category: 'Health',
    description: 'Brush your teeth daily',
    priority: 3,
    experience: {
      progress: 50,
      level: 1,
    },
  },
  {
    id: 2,
    habitName: 'cycle for 1h',
    frequency: 'once a day',
    category: 'Health',
    description: 'cycle for 1h',
    priority: 5,
    experience: {
      progress: 30,
      level: 2,
    },
  },
  {
    id: 3,
    habitName: 'Medical check',
    frequency: 'once a month',
    category: 'Health',
    description: 'Medical check',
    priority: 3,
    experience: {
      progress: 40,
      level: 3,
    },
  },
  {
    id: 4,
    habitName: 'Read a book',
    frequency: 'once a day',
    category: 'Education',
    description: 'Read a book',
    priority: 3,
    experience: {
      progress: 60,
      level: 2,
    },
  },
  {
    id: 5,
    habitName: 'Go to the bed early',
    frequency: 'once a day',
    category: 'Health',
    description: 'Go to the bed early',
    priority: 3,
    experience: {
      progress: 90,
      level: 5,
    },
  },
];

function HabitDetail() {
  const { id } = useParams();

  const data = habitsList.find((habit) => String(habit.id) === id)!;
  return (
    <div className="main-container flex flex-col gap-9">
      <Header title="Habit Details" />
      <p className="text-center font-bold text-3xl">{data?.habitName}</p>
      <div className="flex flex-col items-center">
        <h3
          className={`text-2xl font-bold text-${tempColorAssing(
            data.experience.level,
            'class'
          )}`}
        >
          Lvl {data.experience.level}
        </h3>
        <ExperienceRing
          size={170}
          textColor={`${tempColorAssing(data.experience.level, 'class')}`}
          experience={data.experience.progress}
          color={tempColorAssing(data.experience.level, 'hex')}
        />
      </div>
      <Details data={data} />
    </div>
  );
}

export default HabitDetail;
