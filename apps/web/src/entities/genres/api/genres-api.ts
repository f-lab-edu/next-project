import { localHttp } from "@/shared/api";

import { GenresReqParams } from "./request-types";
import { GenresDTO } from "./response-types";

const genresBaseURL = "genres";

export default class GenresApi {
  /**
   * 영화 장르 목록
   */
  static async getMovieGenres(
    { language, ...axiosConfig }: GenresReqParams = { language: "ko-KR" },
  ): Promise<GenresDTO> {
    return localHttp
      .get(`${genresBaseURL}/movie/list`, { params: { language }, ...axiosConfig })
      .then((res) => res.data);
  }
}
