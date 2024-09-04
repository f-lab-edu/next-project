import { BaseAxiosRes } from "@/shared/api";

export interface PopularMovie {
  adult: boolean;
  backdropPath: string;
  genreIds: number[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}

export interface PopularMovieListRes extends BaseAxiosRes {
  page: number;
  results: PopularMovie[];
}
