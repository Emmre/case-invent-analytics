import React from 'react';
import {
  Grid2 as Grid,
  Box,
  Paper,
  Typography,
  Chip,
  Rating,
  Divider,
} from '@mui/material';
import {
  Movie as MovieIcon,
  Person as ActorIcon,
  Category as GenreIcon,
  AccessTime as ClockIcon,
} from '@mui/icons-material';
import { IMovieDetails } from '../../types';

const MovieContent: React.FC<IMovieDetails> = ({
  Title,
  Year,
  Poster,
  Plot,
  Director,
  Actors,
  Genre,
  Runtime,
  imdbRating,
}) => {
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, md: 5 }}>
        <Paper
          elevation={6}
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            transition: 'transform 0.3s',
            '&:hover': { transform: 'scale(1.02)' },
          }}
        >
          <img
            src={Poster}
            alt={Title}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, md: 7 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h3" fontWeight="bold">
            {Title}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Chip
              icon={<MovieIcon />}
              label={Year}
              color="primary"
              variant="outlined"
            />
            <Rating
              name="movie-rating"
              value={parseFloat(imdbRating) / 2}
              precision={0.5}
              readOnly
              max={5}
            />
          </Box>

          <Divider />

          <Typography variant="body1">{Plot}</Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Chip
              icon={<ActorIcon />}
              label={`Director: ${Director}`}
              variant="outlined"
            />
            <Chip
              icon={<ActorIcon />}
              label={`Actors: ${Actors}`}
              variant="outlined"
            />
            <Chip
              icon={<GenreIcon />}
              label={`Genre: ${Genre}`}
              variant="outlined"
            />
            <Chip
              icon={<ClockIcon />}
              label={`Runtime: ${Runtime}`}
              variant="outlined"
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MovieContent;
