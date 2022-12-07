import 'react-lazy-load-image-component/src/effects/blur.css';

import { CiCirclePlus } from 'react-icons/ci';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

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

  let location = useLocation();
  const lg = window.screen.width > window.screen.height;

  return (
    <div className={
      `flex justify-between
      items-center
      lg:justify-center
      lg:w-full
      ${location.pathname !== '/home' && 'md:flex-col-reverse md:w-44'}
      `}
      >
      <div className={`
        flex items-center
        gap-4 lg:justify-center
        w-full
        ${location.pathname !== '/home' && 'md:gap-0 md:flex-col md:w-44'}
        `}
      >
        <Link to={`/friend/${id}`}>
          <LazyLoadImage
            src={pictureUrl}
            alt="Friend picture"
            className="rounded-full h-10 w-10 object-cover cursor-pointer lg:w-14 lg:h-auto"
            effect="blur"
          />
        </Link>
        <Link
          to={`/friend/${id}`}
          className={`${location.pathname == '/home' && 'lg:hidden'} `}
        >
          <div
            className='md:flex md:flex-col md:justify-center max-w-127 md:max-w-full md:w-44 md:text-center'>
            <p className="text-secondary-dark dark:text-secondary-light break-words">
              {name}
            </p>
            {email && (
              <p className="text-secondary-regular text-sm dark:text-secondary-light break-words">
                {email}
              </p>
            )}
          </div>
        </Link>
      </div>
      {showButton && (
        <CiCirclePlus
          onClick={() => console.log('Solicitud enviada')}
          className="text-3xl text-primary-dark md:self-end"
        />
      )}
    </div>
  );
};

export default Friend;
