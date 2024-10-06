import { AuthorDetails } from "@/entities/movies";

export interface NowPlayingMovieReview {
  movieId: number;
  title: string;
  posterPath: string;
  id: string;
  author: string;
  authorDetails: AuthorDetails;
  content: string;
  createdAt: string;
  updatedAt: string;
  url: string;
}

export interface NowPlayingMovieListReviewsDTO {
  page: number;
  results: NowPlayingMovieReview[];
}
