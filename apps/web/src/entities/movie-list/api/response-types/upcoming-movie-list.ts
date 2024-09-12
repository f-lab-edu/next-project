import { MovieListDTO } from "./movie-list";

export interface UpcomingMovieListDTO extends MovieListDTO {
  dates: {
    maximum: string;
    minimum: string;
  };
}
