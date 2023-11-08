import api from '../api/axios';

import { IPost } from '../types/post';
import { IRequestParams } from '../types/params';

export const PostService = {
  async getPosts(params?: IRequestParams) {
    const response = await api.get<IPost[]>('/posts', { params });

    return response;
  },
};
