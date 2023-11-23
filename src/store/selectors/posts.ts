import { RootState } from '../store';

export const postsSelector = (state: RootState) => state.posts;
export const postsByUserSelector = (state: RootState) =>
  state.posts.postsByUser;
