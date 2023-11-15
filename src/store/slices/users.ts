import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../types/user';
import { UserService } from '../../services/user';

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

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  try {
    const { data } = await UserService.getUsers();

    return data;
  } catch (error: any) {
    return error.message;
  }
});

export const getUserById = createAsyncThunk(
  'user/getUserById',
  async (id: number) => {
    try {
      const { data } = await UserService.getUserById(id);

      return data;
    } catch (error: any) {
      return error.message;
    }
  }
);

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
