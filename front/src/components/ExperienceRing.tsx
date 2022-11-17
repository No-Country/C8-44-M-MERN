import { motion } from "framer-motion";

interface Ring {
  size: number;
  experience: number;
  level?: number;
  color: string;
  textColor?: string;
  fontSize?: string;
  showLevel: boolean;
  showExperience: boolean;
}

const ExperienceRing = ({
  size,
  experience,
  level,
  color,
  textColor,
  fontSize,
  showLevel,
  showExperience,
}: Ring) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {showExperience && (
        <p
          className={`absolute ${fontSize} text-${
            textColor ? textColor : "secondary-regular"
          }`}
        >
          {experience + "/100 exp"}
        </p>
      )}
      {showLevel && (
        <p
          className={`absolute ${fontSize} text-${
            textColor ? textColor : "secondary-regular"
          }`}
        >
          {"lvl " + level}
        </p>
      )}
      <svg id="progress" width={size} height={size} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          pathLength="1"
          className="indicator"
          initial={{ strokeDasharray: "0 1" }}
          animate={{ strokeDasharray: `${experience / 100} 1` }}
          transition={{ duration: 0.5 }}
          stroke={color}
        />
      </svg>
    </div>
  );
};

export default ExperienceRing;
