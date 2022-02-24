import {configureStore} from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import carReducer from './reducers/carSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    car: carReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
