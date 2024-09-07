import { createBaseModel } from "@/shared/lib";

import { MovieListDTO } from "../api/response-types/movie-list";

import { MovieListItem } from "./movie-list-item";

export abstract class MovieList extends createBaseModel<MovieListDTO>() {
  constructor(private movieList: MovieListDTO) {
    super(movieList);
  }

  get GeneralAudienceMovies() {
    return this.movieList.results.filter(({ adult }) => !adult).map((item) => new MovieListItem(item));
  }
}
