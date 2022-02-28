import { useState, useEffect, useContext, createContext } from 'react';

const USER = {
  login: 'user',
  password: 'pass',
};

interface IUser {
  login: string;
  password: string;
}

type AuthContextType = {
  user: IUser | null;
  logIn: (userInfo: IUser) => void;
  logOut: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser(JSON.parse(token));
    }
  }, []);

  const logIn = (userInfo: IUser) => {
    const { login, password } = userInfo;

    if (login === USER.login && password === USER.password) {
      setUser({ login, password });
      localStorage.setItem('token', JSON.stringify({ login, password }));
    }
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  // typecasted to prevent TS from throwing errors because the context will be null at the beginning
  const auth = useContext(AuthContext) as AuthContextType;

  return auth;
};