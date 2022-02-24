import { createContext } from 'react';

const initialState = {
  loggedIn: false,
}

const AuthContext = createContext(initialState.loggedIn);