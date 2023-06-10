import { createSlice } from '@reduxjs/toolkit';
import { auth } from './AuthOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [auth.register.fulfilled](state, action) {
      state.user.name = action.payload.data.user.name;
      state.user.email = action.payload.data.user.email;
      state.token = action.payload.data.token;
      state.isLoggedIn = true;

    },
    [auth.logIn.fulfilled](state, action) {
      state.user.name = action.payload.data.user.name;
      state.user.email = action.payload.data.user.email;
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
    },
    [auth.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [auth.getCurrent.pending](state, action) {
      state.isLoading = true;
    },
    [auth.getCurrent.fulfilled](state, action) {
      state.isLoading = false;
    },
    [auth.getCurrent.rejected](state, action) {
      state.isLoading = false;
    }
  },
});

export const authReducer = AuthSlice.reducer;
