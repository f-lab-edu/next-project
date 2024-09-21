import { tmdbHttp } from "@/shared/api";
import { camelCaseObjMapper } from "@/shared/lib";

import { GenresReqParams } from "./request-types";
import { GenresDTO } from "./response-types";

const genresBaseURL = "genre";

export default class GenresApi {
  /**
   * 영화 장르 목록
   */
  static async getMovieGenres(
    { language, ...axiosConfig }: GenresReqParams = { language: "ko-KR" },
  ): Promise<GenresDTO> {
    return tmdbHttp
      .get(`${genresBaseURL}/movie/list`, { params: { language }, ...axiosConfig })
      .then((res) => camelCaseObjMapper(res.data));
  }
}
