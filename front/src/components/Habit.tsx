import { AiOutlineCheckCircle } from 'react-icons/ai';
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';
import { MdCheckCircle } from 'react-icons/md';
import { parseClassName } from 'react-toastify/dist/utils';
import { tempColorAssing } from '../utils/changeColor';
import { useState } from 'react';
import ExperienceRing from './ExperienceRing';

interface Habit {
  _id: number;
  name: string;
  frequency?: string;
  category?: string;
  description?: string;
  isComplete?: boolean;
  showChecked?: boolean;
  experience: any;
  sizeExperience?: number
}

const Habit = ({
  name,
  frequency,
  category,
  description,
  experience,
  isComplete,
  showChecked,
  sizeExperience = 100,
  _id,
}: Habit) => {
  const [party, setParty] = useState(false);
  const [isCompleteState, setIsComplete] = useState(isComplete);
  const handleCheck = () => {
    setParty(true);
    setIsComplete(true);
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
            experience.level,
            'class'
          )} text-secondary-dark dark:text-secondary-light`}
        >
          <ExperienceRing
            size={sizeExperience}
            experience={40}
            level={2}
            color={"#f85f6a"}
            textColor={"primary-dark"}
            fontSize={"text-10 lg:text-sm"}
          />
        </span>
        <div className={`location.pathname === '/habits') && lg:hidden`}>
          {showChecked ? (
            isCompleteState ? (
              <MdCheckCircle
                color={'#5ED55E'}
                size={'35px'}
                className="cursor-pointer"
              />
            ) : (
              <AiOutlineCheckCircle
                className="cursor-pointer"
                color={'#8492a6'}
                size={'35px'}
                onClick={handleCheck}
              />
            )
          ) : null}
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
