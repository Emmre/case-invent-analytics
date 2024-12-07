import React from 'react';
import { Container, Skeleton } from '@mui/material';
import Grid from '@mui/material/Grid2';

const MovieDetailSkeleton: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={500}
            sx={{ borderRadius: 2 }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Skeleton variant="text" width="90%" height={60} />
          <Skeleton variant="text" width="70%" height={40} />
          {[...Array(5)].map((_, index) => (
            <Skeleton
              key={index}
              variant="text"
              width={`${100 - index * 10}%`}
              height={30}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieDetailSkeleton;
