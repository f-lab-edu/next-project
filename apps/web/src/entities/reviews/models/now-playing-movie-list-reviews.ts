import { NowPlayingMovieListReviewsDTO } from "../api";

import { NowPlayingMovieReviewModel } from "./now-playing-movie-review";

export class NowPlayingMovieListReviewsModel {
  constructor(private data: NowPlayingMovieListReviewsDTO) {}

  get Reviews() {
    return this.data.results.map((review) => new NowPlayingMovieReviewModel(review));
  }
}
