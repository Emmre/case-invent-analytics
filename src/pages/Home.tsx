import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FilterBar from '../components/FilterBar';
import { Container } from '@mui/material';
import { getMovies } from '../services/movieService';
import {
  setCurrentPage,
  setMovieList,
  setLoading,
  setFilterYear,
  setFilterType,
  setSearchQuery,
} from '../store/movieSlice';
import { DataGrid } from '@mui/x-data-grid';
import { Search } from '../types';
import { useNavigate } from 'react-router-dom';
import { useMovies } from '../hooks/useMovies';
import {columns} from "../constants";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    searchQuery,
    filterYear,
    filterType,
    currentPage,
    movieList,
    loading,
  } = useMovies((state) => state);

  const fetchMovies = async () => {
    dispatch(setLoading(true));
    try {
      const response = await getMovies(
        currentPage,
        searchQuery,
        filterYear,
        filterType
      );
      dispatch(setMovieList(response));
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [currentPage, searchQuery, filterYear, filterType]);

  const rows = movieList?.Search?.map((movie, index) => ({
    id: index + 1,
    title: movie.Title,
    year: movie.Year,
    imdbID: movie.imdbID,
  }));

  const handlePageChange = (paginationModel: {
    page: number;
    pageSize: number;
  }) => {
    dispatch(setCurrentPage(paginationModel.page + 1));
  };

  const handleFilterChange = (filterModel: any) => {
    filterModel.items.forEach((item: any) => {
      if (item.field && item.value) {
        if (item.field === 'title') {
          dispatch(setSearchQuery(item.value));
        }
        if (item.field === 'year') {
          dispatch(setFilterYear(item.value));
        }
        if (item.field === 'type') {
          dispatch(setFilterType(item.value));
        }
      }
    });

    dispatch(setCurrentPage(1));
  };

  const redirect = (movie: Search) => {
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
    <Container className="container">
      <FilterBar />
      <DataGrid
        filterDebounceMs={1000}
        rows={rows}
        columns={columns}
        pagination
        paginationMode="server"
        loading={loading}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
              page: currentPage - 1,
            },
          },
          filter: {
            filterModel: {
              items: [
                { field: 'title', operator: 'contains', value: searchQuery },
                { field: 'year', operator: 'contains', value: filterYear },
                { field: 'type', operator: 'contains', value: filterType },
              ],
            },
          },
        }}
        onCellClick={(cell) => {
          const movie = movieList.Search[cell.row.id - 1];
          redirect(movie);
        }}
        filterMode="server"
        onFilterModelChange={handleFilterChange}
        onPaginationModelChange={handlePageChange}
        rowCount={Number(movieList.totalResults)}
      />
    </Container>
  );
};
export default Home;
