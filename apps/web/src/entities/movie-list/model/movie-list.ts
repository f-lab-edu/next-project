import { GenresModel } from "@/entities/genres";
import { createBaseModel } from "@/shared/lib";

import { MovieListDTO } from "../api/response-types/movie-list";

import { MovieListItemModel } from "./movie-list-item";

export abstract class MovieListModel extends createBaseModel<MovieListDTO>() {
  constructor(
    private movieList: MovieListDTO,
    private genresModel?: GenresModel,
  ) {
    super(movieList);
  }

  get GeneralAudienceMovies() {
    return this.movieList.results
      .filter(({ adult }) => !adult)
      .map((item) => new MovieListItemModel(item, this.genresModel));
  }
}
