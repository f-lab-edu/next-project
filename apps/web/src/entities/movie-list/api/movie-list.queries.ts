import { queryOptions } from "@tanstack/react-query";

import { PopularMovieListModel } from "../model/popular-movie-list";
import { UpcomingMovieListModel } from "../model/upcoming-movie-list";

import MovieListApi from "./movie-list-api";
import { MovieListReqParams } from "./request-types";

export const movieListQueryKeys = {
  popularMovieList: () => ["popular-movie-list"] as const,
  upcomingMovieList: () => ["upcoming-movie-list"] as const,
  nowPlayingMovieList: () => ["now-playing-movie-list"] as const,
};

export const movieListQueries = {
  popularMovieList: ({ page, language, region }: MovieListReqParams = { page: 1, language: "ko-KR", region: "KR" }) =>
    queryOptions({
      queryKey: [...movieListQueryKeys.popularMovieList(), { page, language, region }],
      queryFn: () => MovieListApi.getPopularMovieList({ page, language, region }),
      select: (data) => new PopularMovieListModel(data),
    }),
  upcomingMovieList: ({ page, language, region }: MovieListReqParams = { page: 1, language: "ko-KR", region: "KR" }) =>
    queryOptions({
      queryKey: [...movieListQueryKeys.upcomingMovieList(), { page, language, region }],
      queryFn: () => MovieListApi.getUpcomingMovieList({ page, language, region }),
      select: (data) => new UpcomingMovieListModel(data),
    }),
};
