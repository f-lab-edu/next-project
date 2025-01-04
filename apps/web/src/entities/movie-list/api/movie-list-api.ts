import { localHttp } from "@/shared/api";

import { MovieListReqParams } from "./request-types";
import { NowPlayingMovieListDTO } from "./response-types/now-playing-movie-list";
import { PopularMovieListDTO } from "./response-types/popular-movie-list";
import { UpcomingMovieListDTO } from "./response-types/upcoming-movie-list";

const movieListBaseURL = "movie_list";

export default class MovieListApi {
  /**
   * 트렌드 영화 목록
   */
  static async getPopularMovieList({
    page = 1,
    language = "ko-KR",
    region = "KR",
    ...axiosConfig
  }: MovieListReqParams): Promise<PopularMovieListDTO> {
    return localHttp
      .get(`${movieListBaseURL}/popular`, {
        params: {
          page,
          language,
          region,
        },
        ...axiosConfig,
      })
      .then((res) => res.data);
  }

  /**
   * 개봉 예정 영화 목록
   */
  static async getUpcomingMovieList(
    { page, language, region, ...axiosConfig }: MovieListReqParams = { page: 1, language: "ko-KR", region: "KR" },
  ): Promise<UpcomingMovieListDTO> {
    return localHttp
      .get(`${movieListBaseURL}/upcoming`, { params: { page, language, region }, ...axiosConfig })
      .then((res) => res.data);
  }

  /**
   * 현재 상영중인 영화 목록
   */
  static async getNowPlayingMovieList(
    { page, language, region, ...axiosConfig }: MovieListReqParams = { page: 1, language: "ko-KR", region: "KR" },
  ): Promise<NowPlayingMovieListDTO> {
    return localHttp
      .get(`${movieListBaseURL}/now_playing`, { params: { page, language, region }, ...axiosConfig })
      .then((res) => res.data);
  }
}
