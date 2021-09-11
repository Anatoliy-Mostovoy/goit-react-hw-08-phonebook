import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const tokenState = {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  cleanToken() {
    axios.defaults.headers.common.Authorization = '';
  },
};

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', async userData => {
  const { data } = await axios.post('/users/signup', userData);
  tokenState.setToken(data.token);
  return data;
});

export const login = createAsyncThunk('auth/login', async userData => {
  const { data } = await axios.post('/users/login', userData);
  tokenState.setToken(data.token);
  return data;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await axios.post('/users/logout');
  tokenState.cleanToken();
});
