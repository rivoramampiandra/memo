import React from 'react';
import {createContext, FC, useState} from 'react';

type AuthType = {
  token: string | null;
  setToken: (token: string) => void;
};

export const AuthContext: any = createContext<AuthType>({
  token: null,
  setToken: () => {},
});

export const AuthProvider: FC = ({children}) => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{setToken, token}}>
      {children}
    </AuthContext.Provider>
  );
};
