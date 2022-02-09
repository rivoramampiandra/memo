import {createSlice} from '@reduxjs/toolkit';

const defaultSlice = createSlice({
  name: 'default',
  initialState: {
    data: 'test',
  },
  reducers: {},
});

export default defaultSlice.reducer;
