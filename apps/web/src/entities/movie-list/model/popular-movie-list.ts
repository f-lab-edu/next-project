import { PopularMovieListDTO } from "../api/response-types/popular-movie-list";

import { MovieListModel } from "./movie-list";

export class PopularMovieListModel extends MovieListModel {
  constructor(private popularMovieList: PopularMovieListDTO) {
    super(popularMovieList);
  }
}
