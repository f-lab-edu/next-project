import { MovieList } from "./movie-list.server";

export interface UpcomingMovieList extends MovieList {
  dates: {
    maximum: string;
    minimum: string;
  };
}
