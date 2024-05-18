import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout } = adminSlice.actions;
export const selectIsLoggedIn = state => state.admin.isLoggedIn;
export default adminSlice.reducer;
