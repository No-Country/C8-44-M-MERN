import { AiOutlineArrowLeft, AiOutlineEdit } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

interface Header {
  title: string;
  editUrl?: string;
  showBack?: boolean;
}

function Header({ title, editUrl, showBack = true }: Header) {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center">
      {showBack && (
        <button onClick={() => navigate(-1)} className="z-10">
          <AiOutlineArrowLeft className="text-primary-dark w-5 h-5" />
        </button>
      )}
      <h1 className={`title w-full absolute text-center left-0`}>{title}</h1>
      {editUrl && (
        <button onClick={() => navigate(editUrl)} className="z-10">
          <AiOutlineEdit className="text-primary-dark w-5 h-5" />
        </button>
      )}
    </header>
  );
}

export default Header;
