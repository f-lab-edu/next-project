import { queryOptions } from "@tanstack/react-query";

import { MovieList } from "../model";

import MovieListApi from "./movie-list-api";
import { PopularMovieListReqParams } from "./request-types";

export const movieListQueryKeys = {
  popularMovieList: () => ["popular-movie-list"] as const,
};

export const movieListQueries = {
  popularMovieList: (
    { page, language, region }: PopularMovieListReqParams = { page: 1, language: "ko-KR", region: 410 },
  ) =>
    queryOptions({
      queryKey: [...movieListQueryKeys.popularMovieList(), { page, language, region }],
      queryFn: () => MovieListApi.getPopularMovieList({ page, language, region }),
      select: (data) => new MovieList(data),
    }),
};
