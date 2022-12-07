import React, { useEffect, useState } from 'react';

const dimensions = window.screen.width >= 1024

const useDimensions = () => {
    const [lg, setDimensions] = useState(dimensions)
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