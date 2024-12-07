import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { MovieState } from '../store/movieSlice';

export const useMovies = <T>(selector: (state: MovieState) => T): T => {
  return useSelector((rootState: RootState) => selector(rootState.movies));
};
