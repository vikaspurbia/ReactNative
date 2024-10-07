import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number; 
  username: string; 
  role: string; 
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ username: string; password: string }>) {
          },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
    registerSuccess(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isAuthenticated = false;
      state.error = action.payload;
    }
  },
});

export const {login, loginSuccess, logout, registerSuccess, loginFailure } = authSlice.actions;

export default authSlice.reducer;
