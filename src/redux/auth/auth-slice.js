import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './auth-operation';

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state, _) {
      state.token = null;
      state.isLoggedIn = false;
      state.user = { name: null, email: null };
    },
  },
});

export default authSlice.reducer;
