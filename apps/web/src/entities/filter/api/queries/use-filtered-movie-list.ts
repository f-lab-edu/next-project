import { useInfiniteQuery } from "@tanstack/react-query";

import FilterApi from "@/entities/filter/api/filter-api";
import { filteredMediaListQueryKeys } from "@/entities/filter/api/queries/query-keys";
import { FilteredMovieListReqParams } from "@/entities/filter/api/request-types/movie";
import FilteredMovieListModel from "@/entities/filter/model/filtered-movie-list";

export const useFilteredMovieList = (args: FilteredMovieListReqParams = {}) => {
  const { watchRegion = "KR", certificationCountry = "KR", language = "ko-KR", ...restArgs } = args;

  const reqArgs = {
    watchRegion,
    certificationCountry,
    language,
    ...restArgs,
  };

  return useInfiniteQuery({
    queryKey: [...filteredMediaListQueryKeys.all, ...filteredMediaListQueryKeys.filteredMovieList(reqArgs)],
    queryFn: ({ pageParam }) => FilterApi.getFilterMovies({ ...reqArgs, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParams) => {
      if (lastPage.totalPages === lastPageParams) {
        return undefined;
      }

      return lastPageParams + 1;
    },
    maxPages: 5,
    select: (data) => new FilteredMovieListModel(FilteredMovieListModel.makeFlattenedData(data)),
  });
};
