import Image from './404.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="main-container flex flex-col items-center justify-center gap-6 dark:bg-secondary-dark">
        <img src={Image} alt="" />
        <Link
          to="/home"
          className=" cursor-pointer  btn-primary p-3 xl:w-1/3 w-full text-center rounded-xl uppercase font-bold"
        >
          Go to Home
        </Link>
      </div>
    </>
  );
};
export default NotFound;
