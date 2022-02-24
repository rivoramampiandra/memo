import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

type authDataType = {
  isLoggedIn?: boolean;
  email?: string | null;
  userName?: string | null;
  tempToken?: string | null;
  tempPassword?: string | null;
  id?: string | null;
};

const initialState: authDataType = {
  isLoggedIn: false,
  email: null,
  userName: null,
  tempToken: null,
  tempPassword: null,
  id: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSignIn: (state, action: PayloadAction<authDataType>) => {
      state = {
        ...state,
        ...action.payload,
      };
    },
    setToken: (state, action: PayloadAction<authDataType>) => {
      state = {
        ...state,
        tempToken: action.payload.tempToken,
      };
    },
    setSignOut: state => {
      state = {...state, ...initialState};
    },
  },
});

export const {setSignIn, setSignOut, setToken} = authSlice.actions;

export const getLoginState = createSelector(
  (state: RootState) => state.auth.isLoggedIn,
  isLoggedIn => isLoggedIn,
);

export const getTempToken = (state: RootState) => state.auth.tempToken;
export const getTempPassword = (state: RootState) => state.auth.tempPassword;
export const getUserId = (state: RootState) => state.auth.id;
export const getUserEmail = (state: RootState) => state.auth.email;

export default authSlice.reducer;
