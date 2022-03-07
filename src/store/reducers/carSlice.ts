import {createSlice, PayloadAction} from '@reduxjs/toolkit';
interface ICar {
  id: number | null;
  model?: string | null;
  brand?: string | null;
}

const initialState: any = {
  currentCar: {
    id: null,
    model: null,
    brand: null,
  },
  allCars: [],
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    changeCar: (state: any, action: PayloadAction<ICar>) => {
      state = {
        ...state,
        currentCar: action.payload,
      };
      return state;
    },
  },
});

export const {changeCar} = carSlice.actions;

export const getCurrentCar = (state: any) => state.car.currentCar;

export default carSlice.reducer;
