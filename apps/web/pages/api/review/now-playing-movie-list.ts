import { NextApiRequest, NextApiResponse } from "next";

import MovieListApi from "@/entities/movie-list/api/movie-list-api";
import MoviesApi from "@/entities/movies/api/movies-api";
import { NowPlayingMovieReviewModel, NowPlayingMovieListReviewsDTO } from "@/entities/reviews";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NowPlayingMovieListReviewsDTO | { message: string }>,
) {
  if (req.method !== "GET") {
    return res.status(405).send({ message: "This request method is not supported fro this resource." });
  }

  const { page, language, region } = req.query;

  if (
    !page ||
    !language ||
    !region ||
    typeof page !== "string" ||
    typeof parseInt(page) !== "number" ||
    typeof language !== "string" ||
    typeof region !== "string"
  ) {
    return res.status(422).send({ message: "Invalid parameters: Your request parameters are incorrect." });
  }

  const movieInfoById = new Map<number, { title: string; posterPath: string }>();

  try {
    const nowPlayingMovies = await MovieListApi.getNowPlayingMovieList({ page: Number(page), language, region });

    const promises = nowPlayingMovies.results.map(({ id, title, posterPath }) => {
      movieInfoById.set(id, { title: title, posterPath: posterPath });
      return MoviesApi.getMovieReviews({ movieId: id, language: "en-EN" });
    });

    const nowPlayingMovieReviews = (await Promise.allSettled(promises)).reduce<NowPlayingMovieReviewModel[]>(
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
          } as NowPlayingMovieReviewModel,
        ];
      },
      [],
    );

    res.status(200).send({ page: Number(page), results: nowPlayingMovieReviews });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed";
    res.status(500).send({ message });
  }
}
