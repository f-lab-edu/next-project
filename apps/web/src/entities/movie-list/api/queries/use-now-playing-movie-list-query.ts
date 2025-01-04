import { useQuery } from "@tanstack/react-query";

import { useMovieGenresQuery } from "@/entities/genres";

import { NowPlayingMovieListModel } from "../../model/now-playing-movie-list";
import MovieListApi from "../movie-list-api";
import { MovieListReqParams } from "../request-types";

import { movieListQueryKeys } from "./query-keys";

export const useNowPlayingMovieListQuery = (
  { page, language, region }: MovieListReqParams = { page: 1, language: "ko-KR", region: "KR" },
) => {
  const { data: movieGenres } = useMovieGenresQuery();

  return useQuery({
    queryKey: [...movieListQueryKeys.nowPlayingMovieList({ page, language, region })],
    queryFn: () => MovieListApi.getNowPlayingMovieList({ page, language, region }),
    select: (data) => new NowPlayingMovieListModel(data, movieGenres),
  });
};
