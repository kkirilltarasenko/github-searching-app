import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RepositoryType, RepositoryDetailsType } from 'src/types/repositoryType';
import { ResponseType } from 'src/types/responseType';
import { BASE_URL, GITHUB_TOKEN, currentRepository } from 'src/constants/constants';

interface SliceState {
  repositories: Array<RepositoryType>,
  selectedRepository: string | null,
  cursor: {
    first: string,
    last: string,
  },
}

const state: SliceState = {
  repositories: [],
  selectedRepository: localStorage.getItem(currentRepository),
  cursor: {
    first: '',
    last: '',
  },
};

export const fetchReps = createAsyncThunk(
  'repositories/fetchReps',
  async (query: string) => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: query }),
    });
    return await response.json();
  }
)

const repsSlice = createSlice({
  name: 'repositories',
  initialState: state,
  reducers: {
    selectRepository: (state, action: PayloadAction<RepositoryDetailsType>) => {
      state.selectedRepository = JSON.stringify(action.payload);
      localStorage.setItem(currentRepository, state.selectedRepository);
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchReps.fulfilled, (state, action: PayloadAction<ResponseType>) => {
      let repositories;
      if (action.payload.data.search) {
        repositories = action.payload.data.search.edges;
      } else {
        repositories = action.payload.data.viewer.repositories.edges;
      }
      state.repositories = repositories;
      state.cursor = {
        first: repositories[0]?.cursor,
        last: repositories[repositories.length - 1]?.cursor,
      };
    })
  }
});

export const { selectRepository } = repsSlice.actions;

export default repsSlice.reducer;