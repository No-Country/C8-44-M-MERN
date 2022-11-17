import { MdCheckCircle } from "react-icons/md"
import { ExperienceRing } from "./";

interface Habit {
  habitName: string;
  frequency: string;
  category: string;
  description: string;
  priority: number;
  experience: object;
}

const Habit = ({habitName, frequency, category, description, priority, experience} : Habit) => {
  return (
    <div className='flex items-center justify-between rounded-full bg-secondary-light/30 w-full my-3'>
      <h3 className=' text-sm pl-5 p-3'>{habitName}</h3>
      <div className="pr-5">
        <MdCheckCircle color={"#5ED55E"} size={"35px"}/>
      </div>
    </div>
  )
}

export default Habit