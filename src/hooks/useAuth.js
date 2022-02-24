import { useState, useEffect, useContext, createContext } from 'react';

const USER = {
  login: 'user',
  password: 'pass',
};

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser(JSON.parse(token));
    }
  }, []);

  const logIn = (login, password) => {
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
  const auth = useContext(AuthContext);

  return auth;
};
