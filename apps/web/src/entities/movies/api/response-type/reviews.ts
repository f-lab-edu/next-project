export interface AuthorDetails {
  name: string;
  username: string;
  avatarPath: string;
  rating: string;
}

export interface ReviewsDTO {
  id: number;
  page: number;
  totalPages: number;
  totalResults: number;
  results: {
    author: string;
    authorDetails: AuthorDetails;
    content: string;
    createdAt: string;
    id: string;
    updatedAt: string;
    url: string;
  }[];
}
