import { ReviewAuthorDetails } from "./review-author-details";

export interface NowPlayingMovieReview {
  movieId: number;
  title: string;
  posterPath: string;
  id: string;
  author: string;
  authorDetails: ReviewAuthorDetails;
  content: string;
  createdAt: string;
  updatedAt: string;
  url: string;
}

export interface NowPlayingMovieListReviewsDTO {
  page: number;
  results: NowPlayingMovieReview[];
}
