import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterType } from '../../store/movieSlice';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Grid2 as Grid,
} from '@mui/material';
import { useMovies } from '../../hooks/useMovies';

const FilterBar = () => {
  const dispatch = useDispatch();
  const filterType = useMovies((state) => state.filterType);

  const handleTypeChange = (event: SelectChangeEvent) => {
    dispatch(setFilterType(event.target.value));
  };

  return (
    <Grid container spacing={2} mb={4}>
      <Grid size={{ xs: 12 }}>
        <FormControl fullWidth>
          <InputLabel shrink>Type</InputLabel>
          <Select
            label="Type"
            onChange={handleTypeChange}
            value={filterType || ''}
            displayEmpty
            defaultValue=""
          >
            <MenuItem value="">All Movies</MenuItem>
            <MenuItem value="movie">Movies</MenuItem>
            <MenuItem value="series">TV Shows</MenuItem>
            <MenuItem value="episode">TV Episodes</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default FilterBar;
