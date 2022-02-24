import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: any = {
  id: null,
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    changeCar: (state: any, action: PayloadAction<any>) => {},
  },
});

export const {changeCar} = carSlice.actions;

export const currentCar = (state: any) => state.auth.isLoggedIn;

export default carSlice.reducer;
