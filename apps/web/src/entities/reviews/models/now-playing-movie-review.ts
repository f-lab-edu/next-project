import { ReviewAuthorDetails, NowPlayingMovieReview as TNowPlayingMovieReview } from "../api";

import { ReviewAuthor } from "./review-author";

export class NowPlayingMovieReview {
  movieId: number;
  movieTitle: string;
  posterPath: string;
  reviewId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  reviewUrl: string;
  authorDetails: ReviewAuthorDetails;

  constructor(data: TNowPlayingMovieReview) {
    this.movieId = data.movieId;
    this.movieTitle = data.title;
    this.posterPath = data.posterPath;
    this.reviewId = data.id;
    this.content = data.content;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.reviewUrl = data.url;
    this.authorDetails = data.authorDetails;
  }

  get AuthorDetails() {
    return new ReviewAuthor(this.authorDetails);
  }
}
