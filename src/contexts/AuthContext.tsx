import React, { createContext, useState } from 'react';

type ContextProps = {
  token: string | null;
  login: (credentials: LoginCredentials) => void;
};

type LoginCredentials = {
  username: string;
  password: string;
};

export const AuthContext = createContext<ContextProps>({
  token: null,
  login: () => {}
});

interface AuthProviderProps {}

export const AuthContextProvider: React.FC<AuthProviderProps> = ({
  children
}) => {
  const [token, setToken] = useState<string | null>(null);

  const login = (credentials: LoginCredentials) => {
    setToken(JSON.stringify(credentials));
  };

  const value: ContextProps = {
    token,
    login
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
