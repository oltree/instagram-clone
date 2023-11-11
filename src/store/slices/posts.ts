import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '../../types/post';
import { PostService } from '../../services/post';

interface PostsState {
  posts: IPost[];
  isLoading: boolean;
  totalPosts: number;
}

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  totalPosts: 0,
};

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (page: number = 0, { dispatch }) => {
    try {
      const response = await PostService.getPosts({
        _page: page,
        _limit: 5,
      });

      const { data, headers } = response;

      if (page === 1) {
        const totalPosts = Number(headers['x-total-count']);

        dispatch(setTotalPosts(totalPosts));
      }

      return data;
    } catch (error: any) {
      return error.message;
    }
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setTotalPosts: (state, action: PayloadAction<number>) => {
      state.totalPosts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getPosts.fulfilled,
        (state, { payload }: PayloadAction<IPost[]>) => {
          state.isLoading = false;
          state.posts = [...state.posts, ...payload];
        }
      )
      .addCase(getPosts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setTotalPosts } = postsSlice.actions;

export default postsSlice.reducer;
