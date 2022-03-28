import { useState, useEffect, createContext, useContext } from 'react';
import useWindowWidth from '../../shared/hooks/useWindowWidth';

type SidebarContextType = {
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

export const SidebarProvider = ({ children }: { children: JSX.Element }) => {
  const [isOpen, setIsOpen] = useState(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    windowWidth >= 910 ? setIsOpen(true) : setIsOpen(false);
  }, [windowWidth]);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return (
    <SidebarContext.Provider value={{ isOpen, openSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const sidebar = useContext(SidebarContext) as SidebarContextType;

  return sidebar;
};
