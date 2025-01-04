import { ReviewAuthorDetailsDTO } from "@/entities/reviews";

export interface ReviewsDTO {
  id: number;
  page: number;
  totalPages: number;
  totalResults: number;
  results: {
    author: string;
    authorDetails: ReviewAuthorDetailsDTO;
    content: string;
    createdAt: string;
    id: string;
    updatedAt: string;
    url: string;
  }[];
}
