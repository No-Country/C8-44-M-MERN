import { Link } from 'react-router-dom';
import { MdCheckCircle } from 'react-icons/md';
import { tempColorAssing } from '../utils/changeColor';
import { AiOutlineCheckCircle } from 'react-icons/ai';

interface Habit {
  id: number;
  habitName: string;
  frequency?: string;
  category?: string;
  description?: string;
  priority?: number;
  isComplete?: boolean;
  showChecked?: boolean;
  experience: any;
}

const Habit = ({
  habitName,
  frequency,
  category,
  description,
  priority,
  experience,
  isComplete,
  showChecked,
  id,
}: Habit) => {
  const handleCheck = () => {
    console.log('checked');
  };
  return (
    <div className="flex items-center justify-between rounded-full bg-secondary-light/30 w-full my-3">
      <Link to={`/habit-detail/${id}`}>
        <h3 className=" text-sm pl-5 p-3 text-secondary-dark">{habitName}</h3>
      </Link>
      <div className="pr-5 flex items-center gap-6">
        <span
          className={`flex text-xs font-bold ${tempColorAssing(
            experience.level,
            'class'
          )}`}
        >
          lvl {experience.level}
        </span>
        {showChecked? isComplete
         ? <MdCheckCircle color={'#5ED55E'} size={'35px'} onClick={handleCheck} />
         : <AiOutlineCheckCircle color={'#8492a6'} size={'35px'} />
         : null
        }
      </div>
    </div>
  );
};

export default Habit;
