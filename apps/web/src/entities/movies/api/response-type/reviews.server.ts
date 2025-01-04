import { ReviewAuthorDetails } from "@/entities/reviews";

export interface Reviews {
  id: number;
  page: number;
  total_pages: number;
  total_results: number;
  results: {
    author: string;
    author_details: ReviewAuthorDetails;
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
  }[];
}
