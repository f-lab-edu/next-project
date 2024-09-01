import { useQuery } from "@tanstack/react-query";

import { PopularMovieListReqParams, movieListQueryKeys } from "@/entities/movie-list";
import { MovieList } from "@/entities/movie-list";
import MovieListApi from "@/entities/movie-list/api/movie-list-api";

export const useFetchPopularMovieList = (
  { page, language, region }: PopularMovieListReqParams = {
    page: 1,
    language: "ko-KR",
    region: 410,
  },
) => {
  const { data, status, error } = useQuery({
    queryKey: [...movieListQueryKeys.popularMovieList(page, language, region)],
    queryFn: () => MovieListApi.getPopularMovieList({ page, language, region }),
    select: (data) => new MovieList(data.data),
  });

  return {
    popularMovieList: data,
    popularMovieListStatus: status,
    popularMovieListError: error,
  };
};
