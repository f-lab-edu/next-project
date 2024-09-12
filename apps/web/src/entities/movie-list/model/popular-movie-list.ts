import { PopularMovieListDTO } from "../api/response-types/popular-movie-list";

import { MovieList } from "./movie-list";

export class PopularMovieList extends MovieList {
  constructor(private popularMovieList: PopularMovieListDTO) {
    super(popularMovieList);
  }
}
