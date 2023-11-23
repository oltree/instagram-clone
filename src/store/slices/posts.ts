import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost, IPostByUser } from '../../types/post';
import { getPosts, getPostsByUser, updatePost } from '../thunks/posts';

interface PostsState {
  posts: IPost[];
  totalPosts: number;
  postsByUser: IPostByUser;
  // isLoading: boolean;
}

const initialState: PostsState = {
  posts: [],
  totalPosts: 0,
  postsByUser: {
    id: '',
    posts: [],
  },
  // isLoading: false,
};

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
          }
        }
      )
      /* .addCase(updatePost.rejected, (state) => {
        state.isLoading = false;
      }); */

      /* .addCase(getPostsByUser.pending, (state) => {
        state.isLoading = true;
      }) */
      .addCase(
        getPostsByUser.fulfilled,
        (state, { payload }: PayloadAction<IPostByUser>) => {
          // state.isLoading = false;
          state.postsByUser = payload;
        }
      );
    /* .addCase(getPostsByUser.rejected, (state) => {
        state.isLoading = false;
      }); */
  },
});

export default postsSlice.reducer;
