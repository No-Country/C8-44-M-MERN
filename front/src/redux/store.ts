import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authSlice, userSlice, habitsSlice } from './features'
export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      user: userSlice.reducer,
      habits: habitsSlice.reducer,
   },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;

