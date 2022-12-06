import { AiOutlineArrowLeft, AiOutlineEdit } from 'react-icons/ai';

import { useNavigate } from 'react-router-dom';

interface Header {
  title: string;
  editUrl?: string;
  fn?: () => void;
  showBack?: boolean;
  icon?: any;
}

function Header({
  title,
  editUrl,
  fn,
  showBack = true,
  icon = <AiOutlineEdit className="text-primary-dark w-5 h-5" />,
}: Header) {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center mb-4">
      {showBack && (
        <button onClick={() => navigate(-1)} className="z-10">
          <AiOutlineArrowLeft className="text-primary-dark w-5 h-5" />
        </button>
      )}
      <h1
        className={`title w-full absolute text-center left-0 dark:text-white`}
      >
        {title}
      </h1>
      {editUrl || fn ? (
        <button
          onClick={() => (fn ? fn() : navigate(editUrl))}
          className="z-10"
        >
          {icon}
        </button>
      ) : null}
    </header>
  );
}

export default Header;
