import { createBaseModel } from "@/shared/lib";

import { MovieListItem as MovieListItemRes } from "../api/response-types/movie-list-item";

export class MovieListItem extends createBaseModel<MovieListItemRes>() {
  constructor(private movieListItem: MovieListItemRes) {
    super(movieListItem);
  }
}
