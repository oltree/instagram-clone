import api from '../api/axios';

import { IPost, IPostByUser } from '../types/post';
import { IRequestParams } from '../types/params';

export const PostService = {
  async getPosts(params?: IRequestParams) {
    const response = await api.get<IPost[]>('/posts', { params });

    return response;
  },

  async updatePost(postId: string, data: IPost) {
    const response = await api.put<IPost>(`/posts/${postId}`, data);

    return response;
  },

  async getPostsByUser(userId: string) {
    const response = await api.get<IPostByUser[]>(`/postsByUser/${userId}`);

    return response;
  },
};
