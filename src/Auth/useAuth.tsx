import { useState, useEffect, useContext, createContext } from 'react';

// firebase
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

import BootAnimation from 'views/BootAnimation/BootAnimation';

type AuthContextType = {
  user: string;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState('');
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user.uid);
      } else {
        setUser('');
      }
      setWaiting(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {waiting ? <BootAnimation /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  // typecasted to prevent TS from throwing errors because the context will be null at the beginning
  const auth = useContext(AuthContext) as AuthContextType;

  return auth;
};
