import { ReviewAuthorDetailsDTO } from "./review-author-details";

export interface NowPlayingMovieReviewDTO {
  movieId: number;
  title: string;
  posterPath: string;
  id: string;
  author: string;
  authorDetails: ReviewAuthorDetailsDTO;
  content: string;
  createdAt: string;
  updatedAt: string;
  url: string;
}

export interface NowPlayingMovieListReviewsDTO {
  page: number;
  results: NowPlayingMovieReviewDTO[];
}
