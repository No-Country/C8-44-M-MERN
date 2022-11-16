import { motion } from "framer-motion";

const ExperienceRing = () => {
  return (
    <div>
      <p>40/100 exp</p>
      <svg id="progress" width="200" height="200" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          initial={{ strokeDasharray: "0 1" }}
          animate={{ strokeDasharray: `${0.5} 1` }}
          transition={{ duration: 0.5 }}
        />
      </svg>
    </div>
  );
};

export default ExperienceRing;
