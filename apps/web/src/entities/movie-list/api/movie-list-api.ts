import { tmdbHttp } from "@/shared/api";
import { camelCaseObjMapper } from "@/shared/lib";

import { MovieListReqParams } from "./request-types";
import { MovieListDTO } from "./response-types";
import { UpcomingMovieListDTO } from "./response-types/upcoming-movie-list";

const movieBaseURL = "movie";

export default class MovieListApi {
  /**
   * 트렌드 영화 목록
   */
  static async getPopularMovieList({
    page = 1,
    language = "ko-KR",
    region = "KR",
    ...axiosConfig
  }: MovieListReqParams): Promise<MovieListDTO> {
    return tmdbHttp
      .get(`${movieBaseURL}/popular`, {
        params: {
          page,
          language,
          region,
        },
        ...axiosConfig,
      })
      .then((res) => camelCaseObjMapper(res.data));
  }

  /**
   * 개봉 예정 영화 목록
   */
  static async getUpcomingMovieList(
    { page, language, region, ...axiosConfig }: MovieListReqParams = { page: 1, language: "ko-KR", region: "KR" },
  ): Promise<UpcomingMovieListDTO> {
    return tmdbHttp
      .get(`${movieBaseURL}/upcoming`, { params: { page, language, region }, ...axiosConfig })
      .then((res) => camelCaseObjMapper(res.data));
  }
}
