import { AiOutlineCheckCircle } from 'react-icons/ai';
import Confetti from 'react-confetti';
import { Link, useLocation } from 'react-router-dom';
import { MdCheckCircle } from 'react-icons/md';
import { parseClassName } from 'react-toastify/dist/utils';
import { tempColorAssing } from '../utils/changeColor';
import { useState } from 'react';

interface Habit {
   id: number;
   name: string;
   // frequency?: string;
   // category?: string;
   // description?: string;
   isComplete?: boolean;
   showChecked?: boolean;
   experience?: any;
}

const Habit = ({
   name,
   // frequency,
   // category,
   // description,
   experience,
   showChecked,
   id,
}: Habit) => {
   const { pathname } = useLocation();
   // console.log(pathname);

   const [party, setParty] = useState(false);
   const [isComplete, setIsComplete] = useState(false);
   const handleCheck = () => {
      setParty(true);
      setIsComplete(true);
   };
   return (
      <div className='flex items-center justify-between rounded-md bg-secondary-light/30 w-full my-3'>
         <Link to={`/habit-detail/${id}`}>
            <h3 className=' text-sm pl-5 p-3 text-secondary-dark dark:text-secondary-light'>
               {name}
            </h3>
         </Link>
         <div className='pr-5 flex items-center gap-6'>
            {pathname === 'home' && (
               <span
                  className={`flex text-xs font-bold ${tempColorAssing(
                     experience.level,
                     'class'
                  )} text-secondary-dark dark:text-secondary-light`}>
                  lvl {experience}
               </span>
            )}
            {pathname === '/home' && showChecked ? (
               isComplete ? (
                  <MdCheckCircle
                     color={'#5ED55E'}
                     size={'35px'}
                     className='cursor-pointer'
                  />
               ) : (
                  <AiOutlineCheckCircle
                     className='cursor-pointer'
                     color={'#8492a6'}
                     size={'35px'}
                     onClick={handleCheck}
                  />
               )
            ) : null}
         </div>
         {pathname === '/home' && (
            <Confetti
               numberOfPieces={party ? 300 : 0}
               recycle={false}
               onConfettiComplete={(confetti) => {
                  setParty(false);
                  confetti?.reset();
               }}
            />
         )}
      </div>
   );
};

export default Habit;
