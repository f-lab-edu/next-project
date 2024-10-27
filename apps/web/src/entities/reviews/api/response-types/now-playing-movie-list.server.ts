import { ReviewAuthorDetails } from "./review-author-details.server";

export interface NowPlayingMovieReview {
  movie_id: number;
  title: string;
  poster_path: string;
  id: string;
  author: string;
  author_details: ReviewAuthorDetails;
  content: string;
  created_at: string;
  updated_at: string;
  url: string;
}

export interface NowPlayingMovieListReviews {
  page: number;
  results: NowPlayingMovieReview[];
}
