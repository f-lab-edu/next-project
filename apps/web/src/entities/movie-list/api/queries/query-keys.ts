import { MovieListReqParams } from "../request-types";

export const movieListQueryKeys = {
  nowPlayingMovieList: ({ page, language, region }: MovieListReqParams) =>
    ["now-playing-movie-list", { page, language, region }] as const,
};
