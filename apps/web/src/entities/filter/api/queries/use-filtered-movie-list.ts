import { useQuery } from "@tanstack/react-query";

import FilterApi from "@/entities/filter/api/filter-api";
import { filteredMediaListQueryKeys } from "@/entities/filter/api/queries/query-keys";
import { FilteredMovieListReqParams } from "@/entities/filter/api/request-types/movie";
import FilteredMovieListModel from "@/entities/filter/model/filtered-movie-list";

export const useFilteredMovieList = (args: FilteredMovieListReqParams = {}) => {
  const { page = 1, watchRegion = "KR", certificationCountry = "KR", language = "ko-KR", ...restArgs } = args;

  const reqArgs = {
    page,
    watchRegion,
    certificationCountry,
    language,
    ...restArgs,
  };

  return useQuery({
    queryKey: [...filteredMediaListQueryKeys.all, ...filteredMediaListQueryKeys.filteredMovieList(reqArgs)],
    queryFn: () => FilterApi.getFilterMovies(reqArgs),
    select: (data) => new FilteredMovieListModel(data),
  });
};
