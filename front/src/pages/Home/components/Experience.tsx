import { ExperienceRing } from "../../../components";

const Experience = () => {
  return (
    <div>
      <h2 className="mb-1 text-primary-light">Experience</h2>
      <div className="relative h-1 w-full bg-secondary-light rounded-full">
        <div className="absolute h-1 w-20 bg-primary-dark rounded-full"></div>
      </div>
      <div className="flex mt-8 justify-between">
        <div className="flex flex-col items-center">
          <h3 className="text-sm text-secondary-regular">Education</h3>
          <ExperienceRing
            size={140}
            progress={0.4}
            level={2}
            showLevel={true}
          />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-sm text-secondary-regular">Health</h3>
          <ExperienceRing
            size={140}
            progress={0.9}
            level={1}
            showLevel={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
