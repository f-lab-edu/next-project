import { AxiosRequestConfig } from "axios";

import { DiscoveredMovieListDTO } from "@/entities/discover";
import { DiscoveredMovieListReqParams } from "@/entities/discover/api/request-types/movie";
import { localHttp } from "@/shared/api";

const discoverBaseURL = "discover";

export default class DiscoverApi {
  /**
   * 영화 필터
   */
  static async getFilterMovies(
    args: DiscoveredMovieListReqParams,
    axiosRequestConfig?: AxiosRequestConfig,
  ): Promise<DiscoveredMovieListDTO> {
    return localHttp
      .get(`${discoverBaseURL}/movie`, {
        params: args,
        ...axiosRequestConfig,
      })
      .then((res) => res.data);
  }
}
