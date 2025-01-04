import { GenresReqParams } from "../request-types";

export const genresQueryKeys = {
  all: ["genres"] as const,
  movieGenres: ({ language }: GenresReqParams) => [...genresQueryKeys.all, "movie-genres", { language }] as const,
};
