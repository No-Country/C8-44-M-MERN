import { motion } from "framer-motion";

interface Ring {
  size: number;
  progress: number;
  level: number;
  showLevel: boolean;
}

const ExperienceRing = ({ size, progress, level, showLevel }: Ring) => {
  return (
    <div className="relative flex items-center justify-center">
      {showLevel ? (
        <>
          <p className="absolute text-sm text-primary-light">
            {progress * 100 + "/100 exp"}
          </p>
          <p className="absolute text-sm text-secondary-regular mt-12">
            {"lvl " + level}
          </p>
        </>
      ) : (
        <p className="absolute text-sm text-primary-light">
          {progress * 100 + "/100 exp"}
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
          animate={{ strokeDasharray: `${progress} 1` }}
          transition={{ duration: 0.5 }}
        />
      </svg>
    </div>
  );
};

export default ExperienceRing;
