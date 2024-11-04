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
    const { page = 1, language = "ko-KR", watchRegion = "KR", ...restArgs } = args;

    return localHttp
      .get(`${discoverBaseURL}/discover/movie`, {
        params: { page, language, watchRegion, ...restArgs },
        ...axiosRequestConfig,
      })
      .then((res) => res.data);
  }
}
