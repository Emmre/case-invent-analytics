import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button } from '@mui/material';
import { ArrowBack as BackIcon } from '@mui/icons-material';
import { getMovieDetails } from '../services/movieService';
import MovieContent from '../components/MovieDetail';
import MovieDetailSkeleton from '../components/Loader/MovieDetail';
import MovieNotFound from '../components/NotFound';
import { IMovieDetails } from '../types';

const MovieDetail: React.FC = () => {
  const { imdbID } = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState<IMovieDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMovieDetails = async () => {
    if (!imdbID) return;
    try {
      setLoading(true);
      const response = await getMovieDetails(imdbID);
      setMovieDetails(response);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [imdbID]);

  const handleGoBack = () => {
    navigate('/');
  };

  if (loading) return <MovieDetailSkeleton />;
  if (!movieDetails) return <MovieNotFound text="Movie details not found" />;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button
        startIcon={<BackIcon />}
        onClick={handleGoBack}
        variant="contained"
        sx={{ mb: 4 }}
      >
        Back to Movies
      </Button>

      <MovieContent {...movieDetails} />
    </Container>
  );
};

export default MovieDetail;
