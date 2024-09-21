import { GenresReqParams } from "../request-types";

export const genresQueryKeys = {
  movieGenres: ({ language }: GenresReqParams) => ["movie-genres", { language }] as const,
};
