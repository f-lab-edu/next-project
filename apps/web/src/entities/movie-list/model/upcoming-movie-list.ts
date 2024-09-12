import { UpcomingMovieListDTO } from "../api/response-types/upcoming-movie-list";

import { MovieList } from "./movie-list";

export class UpcomingMovieList extends MovieList {
  public rangeStartDate: string;
  public rangeEndData: string;

  constructor(private upcomingMovieList: UpcomingMovieListDTO) {
    super(upcomingMovieList);

    this.rangeStartDate = upcomingMovieList.dates.minimum;
    this.rangeEndData = upcomingMovieList.dates.maximum;
  }
}
