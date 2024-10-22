import { NowPlayingMovieListReviewsParams } from "../request-types";

export const reviewsQueryKeys = {
  all: ["reviews"] as const,
  nowPlayingMovieList: ({ page, language, region }: NowPlayingMovieListReviewsParams) =>
    [...reviewsQueryKeys.all, "now-playing-movie-list", { page, language, region }] as const,
};
