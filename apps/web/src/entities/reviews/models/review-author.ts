import { ReviewAuthorDetailsDTO } from "../api";

export class ReviewAuthorModel {
  name: string;
  userName: string;
  avatarPath: string;
  rating: string;

  constructor(data: ReviewAuthorDetailsDTO) {
    this.name = data.name;
    this.userName = data.username;
    this.avatarPath = data.avatarPath;
    this.rating = data.rating;
  }

  get UserNameFirstLetter() {
    return this.userName[0]!;
  }
}
