import axios from 'axios';

const API_URL = 'http://www.omdbapi.com/';
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export const getMovies = async (
  page: number,
  searchQuery: string,
  filterYear: string = '',
  filterType: string = ''
) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        s: searchQuery,
        y: filterYear,
        type: filterType,
        page: page,
        apiKey: API_KEY,
      },
    });

    if (response.data.Response === 'False') {
      return {
        Search: [],
        totalResults: '0',
        Response: 'False',
      };
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const getMovieDetails = async (imdbID: string) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        i: imdbID,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return {};
  }
};
