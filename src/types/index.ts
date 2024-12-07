export interface IMovieList {
  Search: Search[];
  totalResults: string;
  Response: string;
}

export interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  releaseDate: string;
}


export interface IMovieDetails {
  Title: string;
  Year: string;
  Plot: string;
  Director: string;
  Actors: string;
  Genre: string;
  Runtime: string;
  Poster: string;
  imdbRating: string;
}