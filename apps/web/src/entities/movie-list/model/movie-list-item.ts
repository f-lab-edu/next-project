import dayjs from "dayjs";

import { Genres } from "@/entities/genres";
import { languageRegions } from "@/shared/config";
import { createBaseModel } from "@/shared/lib";

import { MovieListItemDTO } from "../api/response-types/movie-list-item";

export class MovieListItem extends createBaseModel<MovieListItemDTO>() {
  constructor(
    private movieListItem: MovieListItemDTO,
    private genresModel?: Genres,
  ) {
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

  get Platform() {
    return this.video ? "OTT" : "극장";
  }

  get ReleasedDateDotParsed() {
    return dayjs(this.ReleasedDate).format("YYYY.MM.DD");
  }

  get Genres() {
    return this.genresModel ? this.genreIds.map((id) => this.genresModel!.GenresList.get(id)!.name)[0]! : "";
  }
}
