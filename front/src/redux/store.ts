import {
   authSlice,
   habitsSlice,
   themeSlice,
   userSlice,
   addFriendSlice,
} from './features';

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      user: userSlice.reducer,
      habits: habitsSlice.reducer,
      allUser: addFriendSlice.reducer,
      theme: themeSlice.reducer,
   },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
