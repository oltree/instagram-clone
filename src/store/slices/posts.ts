import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '../../types/post';
import { PostService } from '../../services/post';

interface PostsState {
  posts: IPost[];
  // isLoading: boolean;
  totalPosts: number;
}

const initialState: PostsState = {
  posts: [],
  // isLoading: false,
  totalPosts: 0,
};

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

export const giveLike = createAsyncThunk(
  'like/giveLike',
  async ({ postId, userId }: { postId: string; userId: string }) => {
    try {
      const { data } = await PostService.giveLike(postId);

      return { data, userId };
    } catch (error: any) {
      return error.message;
    }
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /* .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      }) */
      .addCase(
        getPosts.fulfilled,
        (
          state,
          { payload }: PayloadAction<{ data: IPost[]; totalPosts: number }>
        ) => {
          // state.isLoading = false;
          state.posts = [...state.posts, ...payload.data];
          state.totalPosts = payload.totalPosts;
        }
      )
      /* .addCase(getPosts.rejected, (state) => {
        state.isLoading = false;
      }); */

      /* .addCase(giveLike.pending, (state) => {
        state.isLoading = true;
      }) */
      .addCase(
        giveLike.fulfilled,
        (
          state,
          { payload }: PayloadAction<{ data: { id: string }; userId: string }>
        ) => {
          const postId = payload.data.id;
          const userId = payload.userId;

          const postIndex = state.posts.findIndex((post) => post.id === postId);

          if (postIndex) {
            const updatedPost: IPost = { ...state.posts[postIndex] };

            if (updatedPost.likes.includes(Number(userId))) {
              updatedPost.likes = updatedPost.likes.filter(
                (id) => id !== Number(userId)
              );
            } else {
              updatedPost.likes = [...updatedPost.likes, Number(userId)];
            }

            state.posts[postIndex] = updatedPost;
          }
        }
      );
    /* .addCase(giveLike.rejected, (state) => {
        state.isLoading = false;
      }); */
  },
});

export default postsSlice.reducer;
