import { useQuery } from "@tanstack/react-query";

import { NowPlayingMovieListReviewsModel } from "../../models";
import { NowPlayingMovieListReviewsParams } from "../request-types";
import ReviewsApi from "../reviews-api";

import { reviewsQueryKeys } from "./query-keys";

export const useNowPlayingMovieListReviewsQuery = (
  { language, region, page }: NowPlayingMovieListReviewsParams = { language: "ko-KR", region: "KR", page: 1 },
) => {
  return useQuery({
    queryKey: [...reviewsQueryKeys.nowPlayingMovieList({ language, region, page })],
    queryFn: () => ReviewsApi.getNowPlayingMovieList({ language, region, page }),
    select: (data) => new NowPlayingMovieListReviewsModel(data),
  });
};
