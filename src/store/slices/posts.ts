import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '../../types/post';
import { getPosts, updatePost } from '../thunks/posts';

interface PostsState {
  posts: IPost[];
  totalPosts: number;
  postsByUser: IPost[];
  // isLoading: boolean;
}

const initialState: PostsState = {
  posts: [],
  totalPosts: 0,
  postsByUser: [],
  // isLoading: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsByUser: (state, { payload: userId }: PayloadAction<string>) => {
      state.postsByUser = state.posts.filter(
        (post) => post.author.id === userId
      );
    },
  },
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
          if (state.posts[0]?.id !== payload.data[0]?.id) {
            state.posts = [...state.posts, ...payload.data];
          }
          state.totalPosts = payload.totalPosts;
        }
      )
      /* .addCase(getPosts.rejected, (state) => {
        state.isLoading = false;
      }); */

      /* .addCase(updatePost.pending, (state) => {
        state.isLoading = true;
      }) */
      .addCase(
        updatePost.fulfilled,
        (state, { payload }: PayloadAction<IPost>) => {
          // state.isLoading = false;
          const foundPostIndex = state.posts.findIndex(
            (post) => post.id === payload.id
          );

          if (foundPostIndex !== -1) {
            state.posts[foundPostIndex] = payload;
            state.postsByUser[foundPostIndex] = payload;
          }
        }
      );
    /* .addCase(updatePost.rejected, (state) => {
        state.isLoading = false;
      }); */
  },
});

export const { getPostsByUser } = postsSlice.actions;

export default postsSlice.reducer;
