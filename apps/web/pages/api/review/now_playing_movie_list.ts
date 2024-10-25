import { z } from "zod";

import MovieListApi from "@/entities/movie-list/api/movie-list-api";
import MoviesApi from "@/entities/movies/api/movies-api";
import { NowPlayingMovieReview } from "@/entities/reviews";
import { withCommonRoute } from "@/shared/api";

const querySchema = z.object({
  page: z.coerce.number(),
  language: z.string(),
  region: z.string(),
});

export default withCommonRoute(
  async (req, res) => {
    const { page, language, region } = req.query as unknown as z.infer<typeof querySchema>;

    const movieInfoById = new Map<number, { title: string; posterPath: string }>();

    const nowPlayingMovies = await MovieListApi.getNowPlayingMovieList({ page: Number(page), language, region });

    const promises = nowPlayingMovies.results.map(({ id, title, posterPath }) => {
      movieInfoById.set(id, { title: title, posterPath: posterPath });
      return MoviesApi.getMovieReviews({ movieId: id, language: "en-EN" });
    });

    const nowPlayingMovieReviews = (await Promise.allSettled(promises)).reduce<NowPlayingMovieReview[]>(
      (prev, settledResult) => {
        if (settledResult.status === "rejected") return prev;

        const { id, results } = settledResult.value;

        const movieInfo = movieInfoById.get(id);

        if (!movieInfo || results.length === 0) return prev;

        return [
          ...prev,
          {
            movieId: id,
            title: movieInfo.title,
            posterPath: movieInfo.posterPath,
            ...results[results.length - 1],
          } as NowPlayingMovieReview,
        ];
      },
      [],
    );

    return res.status(200).send({ page: Number(page), results: nowPlayingMovieReviews });
  },
  ["GET"],
  querySchema,
);
