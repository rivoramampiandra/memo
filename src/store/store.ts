import {configureStore} from '@reduxjs/toolkit';
import defaultReduer from './reducers/defaultSlice';

const store = configureStore({
  reducer: {
    default: defaultReduer,
  },
});

export default store;
