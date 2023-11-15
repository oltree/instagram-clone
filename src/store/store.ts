import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsReducer from './slices/posts';
import usersReducer from './slices/users';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
