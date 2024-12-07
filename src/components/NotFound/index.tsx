import React from 'react';
import { Container, Typography } from '@mui/material';

interface MovieNotFoundProps {
  text: string;
}

const MovieNotFound: React.FC<MovieNotFoundProps> = ({ text }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h4" color="error">{text}</Typography>
    </Container>
  );
};

export default MovieNotFound;
