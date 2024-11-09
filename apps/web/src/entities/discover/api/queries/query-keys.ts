import { DiscoveredMovieListReqParams } from "@/entities/discover/api/request-types/movie";

export const filteredMediaListQueryKeys = {
  all: ["filter"] as const,
  filteredMovieList: (args: DiscoveredMovieListReqParams) =>
    [...filteredMediaListQueryKeys.all, "filtered-movie-list", { ...args }] as const,
};
