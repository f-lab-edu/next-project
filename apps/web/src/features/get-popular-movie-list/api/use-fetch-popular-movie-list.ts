import { useQuery } from "@tanstack/react-query";

import { PopularMovieListReqParams, movieListQueryKeys } from "@/entities/movie-list";
import MovieListApi from "@/entities/movie-list/api/movie-list-api";
import PopularMovieList from "@/entities/movie-list/model/popular-movie-list";

export const useFetchPopularMovieList = ({ page = 1, language = "ko-KR", region = 410 }: PopularMovieListReqParams) => {
  const { data, status, error } = useQuery({
    queryKey: [...movieListQueryKeys.popularMovieList(page, language, region)],
    queryFn: () => MovieListApi.getPopularMovieList({ page, language, region }),
    select: (data) => new PopularMovieList(data.data),
  });

  return {
    popularMovieList: data,
    popularMovieListStatus: status,
    popularMovieListError: error,
  };
};
