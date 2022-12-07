import {
   addFriendSlice,
   authSlice,
   habitsSlice,
   themeSlice,
   userSlice,
   createHabitSlice,
} from './features';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    habits: habitsSlice.reducer,
    habit: habitsSlice.reducer,
    theme: themeSlice.reducer,
    allUser: addFriendSlice.reducer,
    createHabits: createHabitSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
