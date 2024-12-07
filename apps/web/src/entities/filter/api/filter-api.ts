import { AxiosRequestConfig } from "axios";

import { FilteredMovieListDTO } from "@/entities/filter";
import { FilteredMovieListReqParams } from "@/entities/filter/api/request-types/movie";
import { localHttp } from "@/shared/api";

const discoverBaseURL = "filter";

export default class FilterApi {
  /**
   * 영화 필터
   */
  static async getFilterMovies(
    args: FilteredMovieListReqParams,
    axiosRequestConfig?: AxiosRequestConfig,
  ): Promise<FilteredMovieListDTO> {
    return localHttp
      .get(`${discoverBaseURL}/movie`, {
        params: args,
        ...axiosRequestConfig,
      })
      .then((res) => res.data);
  }
}
