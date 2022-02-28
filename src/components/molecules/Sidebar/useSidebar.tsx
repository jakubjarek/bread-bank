import { useState, useEffect } from 'react';
import useWindowWidth from '../../../hooks/useWindowWidth';

const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    windowWidth >= 1310 ? setIsOpen(true) : setIsOpen(false);
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
