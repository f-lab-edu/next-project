import { Genres } from "@/entities/genres";
import { createBaseModel } from "@/shared/lib";

import { MovieListDTO } from "../api/response-types/movie-list";

import { MovieListItem } from "./movie-list-item";

export abstract class MovieList extends createBaseModel<MovieListDTO>() {
  constructor(
    private movieList: MovieListDTO,
    private genresModel?: Genres,
  ) {
    super(movieList);
  }

  get GeneralAudienceMovies() {
    return this.movieList.results
      .filter(({ adult }) => !adult)
      .map((item) => new MovieListItem(item, this.genresModel));
  }
}
