//@ts-nocheck

import { useState, useEffect, useContext, createContext } from 'react';

// firebase
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

import Preloader from 'views/Preloader/Preloader';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';

type AuthContextType = {
  user: any;
  accounts: any;
  details: any;
};

// const AuthContext = createContext<AuthContextType | null>(null);
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accounts, setAccounts] = useState();
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const profileRef = doc(db, 'users', user.uid);
        const profileSnap = await getDoc(profileRef);

        // subscribe to accounts changes
        onSnapshot(doc(db, 'accounts', user.uid), (doc) => {
          setAccounts(doc.data());
        });

        setDetails(profileSnap.data());
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, accounts, details }}>
      {loading ? <Preloader /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  // typecasted to prevent TS from throwing errors because the context will be null at the beginning
  const auth = useContext(AuthContext) as AuthContextType;

  return auth;
};
