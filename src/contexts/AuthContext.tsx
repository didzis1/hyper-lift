import React, { createContext, useState } from 'react';

type ContextProps = {
  token: string | null;
  setToken: (value: string) => void;
};

export const AuthContext = createContext<ContextProps | null>({
  token: null,
  setToken: () => {}
});

interface AuthProviderProps {}

export const AuthContextProvider: React.FC<AuthProviderProps> = ({
  children
}) => {
  const [token, setToken] = useState<string | null>(null);

  const value: ContextProps = {
    token,
    setToken
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
