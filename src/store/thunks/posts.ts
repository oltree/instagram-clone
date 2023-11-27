import { createAsyncThunk } from '@reduxjs/toolkit';
import { PostService } from '../../services/post';
import { IPost } from '../../types/post';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (page: number) => {
    try {
      const { data, headers } = await PostService.getPosts({
        _page: page,
        _limit: 5,
      });

      const totalPosts = Number(headers['x-total-count']);

      return { data, totalPosts };
    } catch (error: any) {
      return error.message;
    }
  }
);

export const updatePost = createAsyncThunk(
  'post/updatePost',
  async ({ postId, post }: { postId: string; post: IPost }) => {
    try {
      const { data } = await PostService.updatePost(postId, post);

      return data;
    } catch (error: any) {
      return error.message;
    }
  }
);
