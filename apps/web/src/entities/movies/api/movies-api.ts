import { tmdbHttp } from "@/shared/api";
import { camelCaseObjMapper } from "@/shared/lib";

import { ReviewsReqParams } from "./request-type";
import { ReviewsDTO } from "./response-type";

const moviesBaseURL = "movie";

export default class MoviesApi {
  /**
   * 영화 리뷰 목록
   */
  static async getMovieReviews({
    movieId,
    language = "ko-KR",
    page = 1,
    ...axiosConfig
  }: ReviewsReqParams): Promise<ReviewsDTO> {
    return tmdbHttp
      .get(`${moviesBaseURL}/${movieId}/reviews`, {
        params: {
          page,
          language,
        },
        ...axiosConfig,
      })
      .then((res) => camelCaseObjMapper(res.data));
  }
}
