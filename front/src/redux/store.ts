import {
  authSlice,
  habitsSlice,
  themeSlice,
  userSlice,
  usersSlice,
} from './features';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    habits: habitsSlice.reducer,
    theme: themeSlice.reducer,
    users: usersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
