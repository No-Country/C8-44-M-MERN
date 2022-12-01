import 'react-lazy-load-image-component/src/effects/blur.css';

import { CiCirclePlus } from 'react-icons/ci';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

interface Friend {
  id: string;
  email?: string;
  name: string;
  pictureUrl: string;
  showButton?: boolean;
}

const Friend = ({
  email,
  name,
  pictureUrl,
  showButton = false,
  id,
}: Friend) => {
  return (
    <div className="flex justify-between items-center pt-4">
      <div className="flex items-center gap-4">
        <LazyLoadImage
          src={pictureUrl}
          alt="Friend picture"
          className="rounded-full h-10 w-10 object-cover"
          effect="blur"
        />
        <Link to={`/friend/${id}`}>
          <div>
            <p className="text-secondary-dark dark:text-secondary-light">
              {name}
            </p>
            {email && (
              <p className="text-secondary-regular text-sm dark:text-secondary-light">
                {email}
              </p>
            )}
          </div>
        </Link>
      </div>
      {showButton && (
        <CiCirclePlus
          onClick={() => console.log('Solicitud enviada')}
          className="text-3xl text-primary-dark"
        />
      )}
    </div>
  );
};

export default Friend;
