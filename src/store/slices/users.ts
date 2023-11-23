import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/user';
import { getUserById, getUsers } from '../thunks/users';

interface UsersState {
  users: IUser[];
  user: IUser;
  // isLoading: boolean;
}

const initialState: UsersState = {
  users: [],
  user: {
    id: '',
    firstName: '',
    lastName: '',
    nickname: '',
    avatarUrl: '',
    description: '',
    url: '',
    subscribers: [],
    subscribed: [],
  },
  // isLoading: false,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /* .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      }) */
      .addCase(
        getUsers.fulfilled,
        (state, { payload }: PayloadAction<IUser[]>) => {
          // state.isLoading = false;
          state.users = payload;
        }
      )
      /* .addCase(getUsers.rejected, (state) => {
        state.isLoading = false;
      }); */

      /* .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
      }) */
      .addCase(
        getUserById.fulfilled,
        (state, { payload }: PayloadAction<IUser>) => {
          // state.isLoading = false;
          state.user = payload;
        }
      );
    /* .addCase(getUserById.rejected, (state) => {
        state.isLoading = false;
      }); */
  },
});

export default usersSlice.reducer;
