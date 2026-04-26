import { useState, useEffect } from 'react';

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // cleanup: removes the listener when component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []); // empty array = runs once on mount

  return width;
}