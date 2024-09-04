import { tmdbHttp } from "@/shared/api";
import { camelCaseObjMapper, Nullable } from "@/shared/lib";

import { PopularMovieListReqParams } from "./request-types";
import { MovieListRes } from "./response-types";

export default class MovieListApi {
  static baseURL = "movie";

  static async getPopularMovieList({
    page = 1,
    language = "ko-KR",
    region = 410,
    ...axiosConfig
  }: PopularMovieListReqParams): Promise<Nullable<MovieListRes>> {
    return tmdbHttp
      .get(`${this.baseURL}/popular`, {
        params: {
          page,
          language,
          region,
        },
        ...axiosConfig,
      })
      .then((res) => camelCaseObjMapper(res.data));
  }
}
