import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const persistedAuth = JSON.parse(localStorage.getItem('auth'));
  const [auth, setAuth] = useState(persistedAuth);

  function login(authData) {
    setAuth(authData);
    localStorage.setItem('auth', JSON.stringify(authData));
  }

  function logout() {
    setAuth(null);
    localStorage.removeItem('auth');
  }

  return (
    <AuthContext.Provider value={{ auth, login, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.any
};

export default AuthContext;
