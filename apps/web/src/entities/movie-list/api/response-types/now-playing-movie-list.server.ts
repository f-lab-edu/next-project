import { MovieList } from "./movie-list.server";

export interface NowPlayingMovieList extends MovieList {
  dates: {
    maximum: string;
    minimum: string;
  };
}
