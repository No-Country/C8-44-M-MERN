import { ExperienceRing } from "../../../components";

const Experience = () => {
  return (
    <div>
      <h2 className="home-title">Experience</h2>
      <div className="relative h-1 w-full bg-secondary-light rounded-full">
        <div className="absolute  w-1/3 bg-primary-light rounded-full"></div>
      </div>
      <div className="flex mt-8 justify-between">
        <div className="flex flex-col items-center">
          <h3 className="text-sm text-secondary-regular">Education</h3>
          <ExperienceRing
            size={140}
            experience={40}
            color={"#f85f6a"}
            textColor={"primary-dark"}
            fontSize={"text-sm"}
          />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-sm text-secondary-regular">Health</h3>
          <ExperienceRing
            size={140}
            experience={90}
            color={"#5f83f8"}
            textColor={"blue"}
            fontSize={"text-sm"}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
