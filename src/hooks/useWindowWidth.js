import { useState, useEffect } from 'react';
import getWindowWidth from '../helpers/getWindowWidth';

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  return windowWidth;
}

export default useWindowWidth;
