import { ExperienceRing } from '../../../components';

const lg = window.screen.width > window.screen.height;

const Experience = ({ user }: any) => {
  return (
    <div className="lg:w-4/12">
      <h2 className="home-title">Experience</h2>
      <div className="relative h-1 w-full bg-secondary-light rounded-full dark:bg-secondary-regular">
        <div className="absolute w-1/3 bg-primary-light rounded-full"></div>
      </div>
      <div className="flex mt-8 justify-between lg:flex-col lg:gap-8">
        <div className="flex flex-col items-center">
          <h3 className="text-sm text-secondary-regular dark:text-secondary-light">
            Education
          </h3>
          <ExperienceRing
            size={lg ? window.screen.width / 8 : 140}
            experience={user.educationExperience}
            color={'#f85f6a'}
            textColor={'primary-dark'}
            fontSize={'text-sm'}
          />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-sm text-secondary-regular dark:text-secondary-light">
            Health
          </h3>
          <ExperienceRing
            size={lg ? window.screen.width / 8 : 140}
            experience={user.healthExperience}
            color={'#5f83f8'}
            textColor={'blue'}
            fontSize={'text-sm'}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
