import { takeLatest, call, put } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { loginSuccess, registerSuccess } from './authSlice';

interface LoginPayload {
  username: string; 
  password: string;
}

interface RegisterPayload {
  username: string; 
  password: string;
  role: string; 
}

interface User {
  id: number; 
  username: string; 
  role: string; 
}

// Login saga
function* login(action: { type: string; payload: LoginPayload }): Generator<unknown, void, AxiosResponse<{ user: User }>> {
  try {
    const response: AxiosResponse<{ user: User }> = yield call(axios.post, 'http://10.0.1.171:5000/api/login', action.payload);
    const user = response.data.user;
    yield put(loginSuccess(user));
  } catch (error) {
    console.error('Login failed:', error);
  }
}

// Register saga
function* register(action: { type: string; payload: RegisterPayload }): Generator<unknown, void, AxiosResponse<{ user: User }>> {
  try {
    const response: AxiosResponse<{ user: User }> = yield call(axios.post, 'http://10.0.1.171:5000/api/register', action.payload);
    const user = response.data.user;
    yield put(registerSuccess(user));

    // Optionally, automatically log in the user after successful registration
    yield put({ type: 'auth/login', payload: { username: action.payload.username, password: action.payload.password } });
  } catch (error) {
    console.error('Registration failed:', error);
  }
}

// Watcher saga
function* authSaga() {
  yield takeLatest('auth/login', login);
  yield takeLatest('auth/register', register);
}

export default authSaga;
