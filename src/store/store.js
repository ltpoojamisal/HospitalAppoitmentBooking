import { configureStore } from '@reduxjs/toolkit';
import adminreducer from '../store/slices/AdminSlice';

const store = configureStore({
  reducer: {
    admin: adminreducer,
  },
});

export default store;
