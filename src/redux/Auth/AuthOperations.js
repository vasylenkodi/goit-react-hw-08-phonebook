import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const data = await axios.post('/users/signup', credentials);
    token.set(data.data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const data = await axios.post('/users/login', credentials);
    token.set(data.data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
})

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout')
    token.unset();
  } catch (error) {
    console.log(error.message);
  }
})

const getCurrent = createAsyncThunk('auth/current', async tokenFromStore => {
  try {
    token.set(tokenFromStore);
    const data = await axios.get('/users/current');
    return data.data.user;
  } catch (error) {
    console.log(error);
  }
})

export const auth = {
  register,
  logIn,
  logOut,
  getCurrent,
}