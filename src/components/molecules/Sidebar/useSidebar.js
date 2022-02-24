import { useState, useEffect } from 'react';

function getWindowWidth() {
  const { innerWidth: width } = window;
  return width;
}

const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    if (windowWidth >= 1310) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  const handleOpenSidebar = () => setIsOpen(true);
  const handleCloseSidebar = () => setIsOpen(false);

  return {
    isOpen,
    handleOpenSidebar,
    handleCloseSidebar,
  };
};

export default useSidebar;
