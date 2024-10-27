import { z } from "zod";

import { NowPlayingMovieList } from "@/entities/movie-list";
import { Reviews } from "@/entities/movies";
import { NowPlayingMovieReview } from "@/entities/reviews";
import { tmdbHttpServer, withCommonRoute } from "@/shared/api";
import { camelCaseObjMapper } from "@/shared/lib";

const querySchema = z.object({
  page: z.coerce.number(),
  language: z.string(),
  region: z.string(),
});

export default withCommonRoute(
  async (req, res) => {
    const { page, language, region } = req.query as unknown as z.infer<typeof querySchema>;

    const movieInfoById = new Map<number, { title: string; posterPath: string }>();

    const nowPlayingMovies = await tmdbHttpServer.get<NowPlayingMovieList>("movie/now_playing", {
      params: { page, language, region },
    });

    const promises = nowPlayingMovies.data.results.map(({ id, title, poster_path }) => {
      movieInfoById.set(id, { title: title, posterPath: poster_path });
      // 한국어 리뷰가 없는 경우가 대부분이기 때문에 영어로 언어 고정
      return tmdbHttpServer.get<Reviews>(`movie/${id}/reviews`, { params: { page, language: "en-EN" } });
    });

    const nowPlayingMovieReviews = (await Promise.allSettled(promises)).reduce<NowPlayingMovieReview[]>(
      (prev, settledResult) => {
        if (settledResult.status === "rejected") return prev;

        const { id, results } = settledResult.value.data;

        const movieInfo = movieInfoById.get(id);

        if (!movieInfo || results.length === 0) return prev;

        return [
          ...prev,
          {
            movie_id: id,
            title: movieInfo.title,
            poster_path: movieInfo.posterPath,
            ...results[results.length - 1],
          } as NowPlayingMovieReview,
        ];
      },
      [],
    );

    return res.status(200).send(camelCaseObjMapper({ page: Number(page), results: nowPlayingMovieReviews }));
  },
  ["GET"],
  querySchema,
);
