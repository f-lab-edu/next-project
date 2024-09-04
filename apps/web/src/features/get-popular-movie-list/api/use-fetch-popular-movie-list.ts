import { useQuery } from "@tanstack/react-query";

import { MovieList, PopularMovieListReqParams, movieListQueryKeys } from "@/entities/movie-list";
import MovieListApi from "@/entities/movie-list/api/movie-list-api";

export const useFetchPopularMovieListQuery = (
  { page, language, region }: PopularMovieListReqParams = {
    page: 1,
    language: "ko-KR",
    region: 410,
  },
) => {
  return useQuery({
    queryKey: [...movieListQueryKeys.popularMovieList(page, language, region)],
    queryFn: () => MovieListApi.getPopularMovieList({ page, language, region }),
    select: (data) => new MovieList(data),
  });
};
