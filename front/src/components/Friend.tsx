import { CiCirclePlus } from "react-icons/ci";

interface Friend {
  email: string;
  name: string;
  pictureUrl: string;
  showEmail: boolean;
  showButton: boolean;
}

const Friend = ({ email, name, pictureUrl, showEmail, showButton }: Friend) => {
  return (
    <div className="flex justify-between items-center pt-4">
      <div className="flex items-center gap-4">
        <img
          src={pictureUrl}
          alt="Friend picture"
          className="rounded-full h-10 w-10 object-cover"
        />
        <div>
          <p className="text-secondary-dark">{name}</p>
          {showEmail && (
            <p className="text-secondary-regular text-sm">{email}</p>
          )}
        </div>
      </div>

      {showButton && <CiCirclePlus className="text-3xl" />}
    </div>
  );
};

export default Friend;
