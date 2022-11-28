import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
// import { textSlice } from './features/text';
import authReducer from './features/auth/authSlice';
import dataReducer from './features/data/dataSlice';
import habitsReducer from './features/habits/habitsSlice';
export const store = configureStore({
   reducer: {
      // text: textSlice.reducer,
      auth: authReducer,
      data: dataReducer,
      habits: habitsReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

