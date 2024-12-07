import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovieList } from '../types';

export interface MovieState {
  searchQuery: string;
  filterYear: string;
  filterType: string;
  currentPage: number;
  movieList: IMovieList;
  loading: boolean;
}

const initialState: MovieState = {
  searchQuery: 'Pokemon',
  filterYear: '',
  filterType: '',
  currentPage: 1,
  movieList: {
    Search: [],
    totalResults: '0',
    Response: 'False',
  },
  loading: false,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    setFilterYear: (state, action: PayloadAction<string>) => {
      state.filterYear = action.payload;
      state.currentPage = 1;
    },
    setFilterType: (state, action: PayloadAction<string>) => {
      state.filterType = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setMovieList: (state, action: PayloadAction<IMovieList>) => {
      state.movieList = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setFilterYear,
  setFilterType,
  setCurrentPage,
  setMovieList,
  setLoading,
} = movieSlice.actions;

export default movieSlice.reducer;
