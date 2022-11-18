import { MdCheckCircle } from "react-icons/md"
import { Link } from "react-router-dom";
import { ExperienceRing } from "./";

interface Habit {
  id:number;
  habitName: string;
  frequency: string;
  category: string;
  description: string;
  priority: number;
  experience: any;
}

const tempColorAssing = (level:number) => {
  switch (level) {
    case 1:
      return "text-red-700"
    case 2:
      return "text-orange-400"
    case 3:
      return "text-yellow-500"
    case 4:
      return "text-orange-800"
    case 5:
      return "text-blue-600"
    default:
      return "text-[#FFFFFF]"
  }
}

const Habit = ({habitName, frequency, category, description, priority, experience,id} : Habit) => {
  return (
    <Link to={`/habit-detail/${id}`}>
      <div className='flex items-center justify-between rounded-full bg-secondary-light/30 w-full my-3'>
        <h3 className=' text-sm pl-5 p-3 text-secondary-dark'>{habitName}</h3>
        <div className="pr-5 flex items-center gap-6">
            <span className={`flex text-xs font-bold ${tempColorAssing(experience.level)}`}>
              lvl {experience.level}
            </span>
          <MdCheckCircle color={"#5ED55E"} size={"35px"}/>
        </div>
      </div>
  </Link>
  )
}

export default Habit