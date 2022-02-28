import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

type authDataType = {
  isLoggedIn?: boolean;
  email?: string | null;
  userName?: string | null;
  tempToken?: string | null;
  tempPassword?: string | null;
  id?: number | null;
  firstName?: string | null;
  lastName?: string | null;
};

const initialState: authDataType = {
  isLoggedIn: false,
  email: null,
  userName: null,
  tempToken: null,
  tempPassword: null,
  id: null,
  firstName: null,
  lastName: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setSignIn: (state, action: PayloadAction<authDataType>) => {
      state = {
        ...state,
        ...action.payload,
      };
      return state;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state['tempToken'] = action.payload;
    },
    setSignOut: state => {
      state.isLoggedIn = false;
    },
  },
});

export const {setSignIn, setLogin, setSignOut, setToken} = authSlice.actions;

export const getLoginState = createSelector(
  (state: RootState) => state.auth.isLoggedIn,
  isLoggedIn => isLoggedIn,
);

export const getCurrentUser = (state: RootState) => state.auth;
export const getTempToken = (state: RootState) => state.auth.tempToken;
export const getTempPassword = (state: RootState) => state.auth.tempPassword;
export const getUserId = (state: RootState) => state.auth.id;
export const getUserEmail = (state: RootState) => state.auth.email;

export default authSlice.reducer;
