import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: any = {
  currentCar: {
    id: null,
  },
  allCars: [],
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    changeCar: (state: any, action: PayloadAction<number>) => {
      state['currentCar'] = {id: action.payload};
    },
  },
});

export const {changeCar} = carSlice.actions;

export const getCurrentCar = (state: any) => state.car.currentCar;

export default carSlice.reducer;
