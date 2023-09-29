import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {},
});

export default usersSlice.reducer;
