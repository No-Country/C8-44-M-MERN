import { ExperienceRing } from "../../../components";

const Experience = () => {
  return (
      <div className="flex mt-3 justify-center gap-8">
        <div className="flex flex-col items-center">
          <h3 className="text-xs text-secondary-regular">Education</h3>
          <ExperienceRing
            size={90}
            experience={40}
            color={"#f85f6a"}
            textColor={"primary-dark"}
            fontSize={"text-xs"}
          />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xs text-secondary-regular">Health</h3>
          <ExperienceRing
            size={90}
            experience={90}
            color={"#5f83f8"}
            textColor={"blue"}
            fontSize={"text-xs"}
          />
        </div>
      </div>
  );
};

export default Experience;
