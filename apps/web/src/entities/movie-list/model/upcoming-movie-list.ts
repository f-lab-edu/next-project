import { UpcomingMovieListDTO } from "../api/response-types/upcoming-movie-list";

import { MovieListModel } from "./movie-list";

export class UpcomingMovieListModel extends MovieListModel {
  public rangeStartDate: string;
  public rangeEndData: string;

  constructor(private upcomingMovieList: UpcomingMovieListDTO) {
    super(upcomingMovieList);

    this.rangeStartDate = upcomingMovieList.dates.minimum;
    this.rangeEndData = upcomingMovieList.dates.maximum;
  }
}
