import { z } from "zod";

export const discoveredMovieListQuerySchema = z.object({
  certificationCountry: z.string().optional(),
  includeAdult: z.coerce.boolean().optional(),
  includeVideo: z.coerce.boolean().optional(),
  language: z.string().optional(),
  page: z.coerce.number().optional(),
  releaseDateGte: z.coerce.date().optional(),
  releaseDateLte: z.coerce.date().optional(),
  sortBy: z
    .enum([
      "original_title.asc",
      "original_title_desc",
      "popularity.asc",
      "popularity.desc",
      "title.asc",
      "title.desc",
      "vote_average.asc",
      "vote_average.desc",
      "vote_count.asc",
      "vote_count.desc",
    ])
    .optional(),
  voteAverageGte: z.coerce.number().optional(),
  voteAverageLte: z.coerce.number().optional(),
  voteCountGte: z.coerce.number().optional(),
  voteCountLte: z.coerce.number().optional(),
  watchRegion: z.string().optional(),
  withGenre: z.string().optional(),
  withReleaseType: z.enum(["1", "2", "3", "4", "5"]).array().optional(),
  withRunTimeGte: z.coerce.number().optional(),
  withRunTimeLte: z.coerce.number().optional(),
});

/**
 * ```
 * voteAverage - 사용자 점수
 * voteCount - 투표수
 * withReleaseType
 * 1 - Premiere
 * 2 - Theatrical (limited)
 * 3 - Theatrical
 * 4 - Digital
 * 5 - Physical
 * 6 - TV
 * ```
 */
export type SDiscoveredMovieListReqParams = z.infer<typeof discoveredMovieListQuerySchema>;
