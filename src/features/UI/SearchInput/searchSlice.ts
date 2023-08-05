import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { queryKey } from 'src/constants/constants';

interface SliceState {
  query: string | null,
}

const initialState: SliceState = {
  query: localStorage.getItem(queryKey),
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      localStorage.setItem(queryKey, state.query);
    },
  }
});

export const { setQuery } = searchSlice.actions;

export default searchSlice.reducer;