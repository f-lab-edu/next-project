import { languageRegions } from "@/shared/config";
import { createBaseModel } from "@/shared/lib";

import { MovieListItem as MovieListItemRes } from "../api/response-types/movie-list-item";

export class MovieListItem extends createBaseModel<MovieListItemRes>() {
  constructor(private movieListItem: MovieListItemRes) {
    super(movieListItem);
  }

  private get ReleasedDate() {
    return new Date(this.movieListItem.releaseDate);
  }

  get ReleasedYear() {
    return this.ReleasedDate.getFullYear();
  }

  get Rating() {
    return this.voteAverage.toFixed(1);
  }

  get Region() {
    return languageRegions[this.originalLanguage] ?? this.originalLanguage;
  }
}
