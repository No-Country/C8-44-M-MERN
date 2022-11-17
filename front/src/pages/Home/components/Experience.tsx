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
            experience={40}
            level={2}
            color={"#f85f6a"}
            textColor={"primary-dark"}
            fontSize={"text-sm"}
            showLevel={false}
            showExperience={true}
          />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-sm text-secondary-regular">Health</h3>
          <ExperienceRing
            size={140}
            experience={90}
            level={1}
            color={"#5f83f8"}
            textColor={"[#5f83f8]"}
            fontSize={"text-sm"}
            showLevel={false}
            showExperience={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
