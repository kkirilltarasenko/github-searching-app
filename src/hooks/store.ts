import { configureStore } from '@reduxjs/toolkit';
import repsReducer from 'src/features/components/RepsListComponent/repsSlice';
import searchReducer from 'src/features/UI/SearchInput/searchSlice';
import paginatorReducer from 'src/features/UI/Paginator/paginatorSlice';

export const store = configureStore({
  reducer: {
    repositories: repsReducer,
    query: searchReducer,
    paginator: paginatorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;