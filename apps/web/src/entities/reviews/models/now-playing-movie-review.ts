import { NowPlayingMovieReview as TNowPlayingMovieReview } from "../api";

export class NowPlayingMovieReview {
  movieId: number;
  movieTitle: string;
  posterPath: string;
  reviewId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  reviewUrl: string;

  constructor(data: TNowPlayingMovieReview) {
    this.movieId = data.movieId;
    this.movieTitle = data.title;
    this.posterPath = data.posterPath;
    this.reviewId = data.id;
    this.content = data.content;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.reviewUrl = data.url;
  }
}
