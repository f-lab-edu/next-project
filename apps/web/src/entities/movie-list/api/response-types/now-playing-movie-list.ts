import { MovieListDTO } from "./movie-list";

export interface NowPlayingMovieListDTO extends MovieListDTO {
  dates: {
    maximum: string;
    minimum: string;
  };
}
