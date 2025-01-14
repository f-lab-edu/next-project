import { localHttp } from "@/shared/api";

import { NowPlayingMovieListReviewsParams } from "./request-types";
import { NowPlayingMovieListReviewsDTO } from "./response-types";

const reviewsBaseURL = "review";

export default class ReviewsApi {
  /**
   * 현재 상영중인 영화 리뷰
   */
  static async getNowPlayingMovieList(
    { page, language, region, ...axiosConfig }: NowPlayingMovieListReviewsParams = {
      page: 1,
      language: "ko-KR",
      region: "KR",
    },
  ): Promise<NowPlayingMovieListReviewsDTO> {
    return localHttp
      .get(`${reviewsBaseURL}/now_playing_movie_list`, {
        params: {
          page,
          language,
          region,
        },
        ...axiosConfig,
      })
      .then((res) => res.data);
  }
}
