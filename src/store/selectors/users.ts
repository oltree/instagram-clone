import { RootState } from '../store';

export const usersSelector = (state: RootState) => state.users.users;
export const userSelector = (state: RootState) => state.users.user;
