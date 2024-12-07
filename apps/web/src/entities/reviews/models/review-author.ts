import { ReviewAuthorDetailsDTO } from "../api";

export class ReviewAuthorModel {
  private name: string | null;
  private userName: string;
  avatarPath: string;
  rating: string | null;

  constructor(data: ReviewAuthorDetailsDTO) {
    this.name = data.name;
    this.userName = data.username;
    this.avatarPath = data.avatarPath;
    this.rating = data.rating;
  }

  get UserName() {
    return this.name ? this.name : this.userName;
  }

  get UserNameFirstLetter() {
    return this.UserName[0];
  }

  get ScoreMaximumFive() {
    return this.rating ? String(parseInt(this.rating) / 2) : null;
  }
}
