import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaginatorItemType } from 'src/types/paginatorItemType';

interface SliceState {
  items: PaginatorItemType[],
  current: number,
  prev: number,
}

const state: SliceState = {
  items: [
    {id: 1, value: '1', isClicked: true},
    {id: 2, value: '2', isClicked: false},
    {id: 3, value: '3', isClicked: false},
    {id: 4, value: '4', isClicked: false},
    {id: 5, value: '5', isClicked: false},
  ],
  current: 1,
  prev: -1,
}

const paginatorSlice = createSlice({
  name: 'paginator',
  initialState: state,
  reducers: {
    setActiveItem: (state, action: PayloadAction<PaginatorItemType>) => {
      state.items = state.items.map((el) => {
        if (el.id === action.payload.id) {
          el.isClicked = true;
          state.prev = state.current;
          state.current = Number(el.value);
        } else {
          el.isClicked = false;
        }
        return el;
      });
      return state;
    }
  }
});

export const { setActiveItem } = paginatorSlice.actions;

export default paginatorSlice.reducer;