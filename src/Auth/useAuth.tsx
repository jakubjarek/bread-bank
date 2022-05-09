import { useState, useEffect, useContext, createContext } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
// firebase types
import { User } from 'firebase/auth';
import { DocumentData } from 'firebase/firestore';

import { auth, db } from '../firebase';
import Preloader from 'views/Preloader/Preloader';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';

type AuthContextType = {
  user: User | null;
  accounts: DocumentData | undefined;
  details: DocumentData | undefined;
};

// const AuthContext = createContext<AuthContextType | null>(null);
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<AuthContextType['user']>(null);
  const [accounts, setAccounts] = useState<DocumentData | undefined>();
  const [details, setDetails] = useState<DocumentData | undefined>();
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
