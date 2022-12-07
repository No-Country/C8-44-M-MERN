import { AiOutlineCheckCircle } from 'react-icons/ai';
import Confetti from 'react-confetti';
import { Habit as HabitType } from '../models';
import { Link } from 'react-router-dom';
import { MdCheckCircle } from 'react-icons/md';
import { checkHabit } from '../redux/features';
import { parseClassName } from 'react-toastify/dist/utils';
import { tempColorAssing } from '../utils/changeColor';
import { useAppDispatch } from '../redux/hooks';
import { useState } from 'react';
import ExperienceRing from './ExperienceRing';

const Habit = (
  {
    name,
    frequency,
    category,
    description,
    experience,
    isDone,
    sizeExperience = 100,
    _id,
  }: HabitType,
  showChecked: boolean
) => {
  const [party, setParty] = useState(false);
  const dispatch = useAppDispatch();
  const handleCheck = async () => {
    setParty(true);
    await dispatch(checkHabit(_id));
  };

  return (
    <div className={
     `flex items-center
      justify-between
      rounded-md bg-secondary-light/30
      w-full my-3
      ${location.pathname == '/habits' && 'lg:flex-col'}
      `}
    
    >
      <Link to={`/habit-detail/${_id}`}>
        <h3 className=" text-sm pl-5 p-3 text-secondary-dark dark:text-secondary-light">
          {name}
        </h3>
      </Link>
      <div className="pr-5 flex items-center gap-6">
        <span
          className={`flex text-xs font-bold ${tempColorAssing(
            Math.ceil(experience / 100),
            'class'
          )} text-secondary-dark dark:text-secondary-light`}
        >
          {!sizeExperience? 
            'lvl ${Math.round(experience / 100)}'
          : <ExperienceRing
            size={sizeExperience}
            experience={40}
            level={2}
            color={"#f85f6a"}
            textColor={"primary-dark"}
            fontSize={"text-10 lg:text-sm"}
          />
        }
        </span>
        <div className={`location.pathname === '/habits') && lg:hidden`}>
          {isDone ? (
            <MdCheckCircle color={'#5ED55E'} size={'35px'} />
          ) : (
            <AiOutlineCheckCircle
              className="cursor-pointer"
              color={'#8492a6'}
              size={'35px'}
              onClick={handleCheck}
            />        
        )}
      </div>
      </div>
      <Confetti
        numberOfPieces={party ? 300 : 0}
        recycle={false}
        onConfettiComplete={(confetti) => {
          setParty(false);
          confetti?.reset();
        }}
      />
    </div>
  );
};

export default Habit;
