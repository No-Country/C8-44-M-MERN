import { motion } from 'framer-motion';

import { useEffect } from 'react';

import { tempColorAssing } from '../utils/changeColor';

interface Ring {
   experience: number;
   level?: number;
   color?: string;
   textColor?: string;
   fontSize?: string;
   size?: number;
}

const ExperienceRing = ({
  size,
  experience,
  level,
  color,
  textColor = 'secondary-regular',
  fontSize = 'text-base',
}: Ring) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {!level ? (
        <p className={`absolute ${fontSize} text-${textColor}`}>
          {experience + '/100 exp'}
        </p>
      ) : (
        <p className={`absolute ${fontSize} text-${textColor}`}>
          {'Lvl ' + level}
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
          initial={{ strokeDasharray: '0 1' }}
          animate={{ strokeDasharray: `${experience / 100} 1` }}
          transition={{ duration: 0.5 }}
          stroke={level ? tempColorAssing(level, 'hex') : color}
        />
      </svg>
    </div>
  );
};

export default ExperienceRing;
