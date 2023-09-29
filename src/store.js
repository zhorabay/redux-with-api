import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    user: usersReducer,
  },
});

export default store;
