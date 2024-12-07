import { FilteredMovieListReqParams } from "@/entities/filter/api/request-types/movie";

export const filteredMediaListQueryKeys = {
  all: ["filter"] as const,
  filteredMovieList: (args: FilteredMovieListReqParams) => ["filtered-movie-list", { ...args }] as const,
};
