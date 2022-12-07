import React, { useEffect, useState } from 'react';

const useDimensions = () => {
    const [lg, setDimensions] = useState(window.innerWidth >= 1024)
    useEffect(() => {

        const handleDimensions = () => {
          setDimensions( window.innerWidth >= 1024 )
        }
        window.onresize = handleDimensions
        return () => window.removeEventListener('resize', handleDimensions);
    },[])

    return {
      lg
    }
}

export default useDimensions