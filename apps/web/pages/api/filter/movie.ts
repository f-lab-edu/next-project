import { tmdbHttpServer, withCommonRoute } from "@/shared/api";
import { camelCaseObjMapper } from "@/shared/lib";

import {
  FilteredMovieList,
  filteredMovieListQuerySchema,
  SFilteredMovieListReqParams,
} from "../../../src/entities/filter";

export default withCommonRoute(
  async (req, res) => {
    const queries = req.query as unknown as SFilteredMovieListReqParams;

    const result = await tmdbHttpServer.get<FilteredMovieList>("discover/movie", {
      params: {
        certification_country: queries.certificationCountry,
        include_adult: queries.includeAdult,
        include_video: queries.includeVideo,
        language: queries.language,
        page: queries.page,
        "release_date.gte": queries.releaseDateGte,
        "release_date.lte": queries.releaseDateLte,
        sort_by: queries.sortBy,
        "vote_average.gte": queries.voteAverageGte,
        "vote_average.lte": queries.voteAverageLte,
        "vote_count.gte": queries.voteCountGte,
        "vote_count.lte": queries.voteCountLte,
        watch_region: queries.watchRegion,
        with_genre: queries.withGenre,
        with_release_type: queries.withReleaseType && queries.withReleaseType.join("|"),
        "with_run_time.gte": queries.withRunTimeGte,
        "with_run_time.lte": queries.withRunTimeLte,
      },
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return res.status(200).send(camelCaseObjMapper(result.data));
  },
  ["GET"],
  filteredMovieListQuerySchema,
);
