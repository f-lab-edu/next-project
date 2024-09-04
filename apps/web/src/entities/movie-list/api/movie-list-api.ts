import { AxiosResponse } from "axios";

import { tmdbHttp } from "@/shared/api";
import { camelCaseObjMapper, Nullable } from "@/shared/lib";

import { PopularMovieListReqParams } from "./request-types";
import { PopularMovieListRes } from "./response-types";

export default class MovieListApi {
  static baseURL = "movie";

  static async getPopularMovieList({
    page = 1,
    language = "ko-KR",
    region = 410,
    ...axiosConfig
  }: PopularMovieListReqParams): Promise<AxiosResponse<Nullable<PopularMovieListRes>>> {
    const { data, ...rest } = await tmdbHttp.get(`${this.baseURL}/popular`, {
      params: {
        page,
        language,
        region,
      },
      ...axiosConfig,
    });

    return { data: camelCaseObjMapper(data), ...rest };
  }
}
