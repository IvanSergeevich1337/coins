import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../../../common/types/auth';

const initialState: IAuthState = {
  user: {
    id: null,
    firstName: '',
    username: '',
    email: '',
    createdAt: '',
    updatedAt: '',
    watchlist: [
      {
        id: null,
        name: '',
        assetId: '',
        createdAt: '',
        updatedAt: '',
        user: null,
      },
    ],
  },
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuth = true;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
