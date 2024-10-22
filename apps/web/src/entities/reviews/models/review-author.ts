import { ReviewAuthorDetails } from "../api";

export class ReviewAuthorModel {
  name: string;
  userName: string;
  avatarPath: string;
  rating: string;

  constructor(data: ReviewAuthorDetails) {
    this.name = data.name;
    this.userName = data.username;
    this.avatarPath = data.avatarPath;
    this.rating = data.rating;
  }

  get UserNameFirstLetter() {
    return this.userName[0]!;
  }
}
