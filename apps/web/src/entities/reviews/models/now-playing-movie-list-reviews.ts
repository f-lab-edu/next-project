import { NowPlayingMovieListReviewsDTO } from "../api";

import { NowPlayingMovieReview } from "./now-playing-movie-review";

export class NowPlayingMovieListReviews {
  constructor(private data: NowPlayingMovieListReviewsDTO) {}

  get Reviews() {
    return this.data.results.map((review) => new NowPlayingMovieReview(review));
  }
}
