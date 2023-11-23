import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserService } from '../../services/user';

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
  async (id: string) => {
    try {
      const { data } = await UserService.getUserById(id);

      return data;
    } catch (error: any) {
      return error.message;
    }
  }
);
