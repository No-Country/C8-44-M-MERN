import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from './features/auth/authSlice';
import dataReducer from './features/data/dataSlice';
import habitsReducer from './features/habits/habitsSlice';

export const store = configureStore({
   reducer: {
      auth: authReducer,
      data: dataReducer,
      habits: habitsReducer,
   },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;

