import api from '../api/axios';

import { IUser } from '../types/user';

export const UserService = {
  async getUsers() {
    const response = await api.get<IUser[]>('/users');

    return response;
  },

  async getUserById(id: string) {
    const response = await api.get<IUser>(`/users/${id}`);

    return response;
  },
};
