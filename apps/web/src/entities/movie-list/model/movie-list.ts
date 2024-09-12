import { createBaseModel } from "@/shared/lib";

import { MovieListDTO } from "../api/response-types/movie-list";

import { MovieListItem } from "./movie-list-item";

export class MovieList extends createBaseModel<MovieListDTO | null>() {
  constructor(private popularMovieList: MovieListDTO | null) {
    super(popularMovieList);
  }

  get GeneralAudienceMovies() {
    if (!this.popularMovieList) {
      return null;
    }

    return this.popularMovieList.results.filter(({ adult }) => !adult).map((item) => new MovieListItem(item));
  }
}
