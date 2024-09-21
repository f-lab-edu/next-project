import { useQuery } from "@tanstack/react-query";

import MovieListApi from "../movie-list-api";
import { MovieListReqParams } from "../request-types";

import { movieListQueryKeys } from "./query-keys";

export const useNowPlayingMovieListQuery = (
  { page, language, region }: MovieListReqParams = { page: 1, language: "ko-KR", region: "KR" },
) => {
  return useQuery({
    queryKey: [...movieListQueryKeys.nowPlayingMovieList({ page, language, region })],
    queryFn: () => MovieListApi.getNowPlayingMovieList({ page, language, region }),
  });
};
