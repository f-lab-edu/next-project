import { useQuery } from "@tanstack/react-query";

import DiscoverApi from "@/entities/discover/api/discover-api";
import { filteredMediaListQueryKeys } from "@/entities/discover/api/queries/query-keys";
import { DiscoveredMovieListReqParams } from "@/entities/discover/api/request-types/movie";
import DiscoveredMovieListModel from "@/entities/discover/model/discovered-movie-list";

export const useFilteredMovieList = (args: DiscoveredMovieListReqParams = {}) => {
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
    queryFn: () => DiscoverApi.getFilterMovies(reqArgs),
    select: (data) => new DiscoveredMovieListModel(data),
  });
};
