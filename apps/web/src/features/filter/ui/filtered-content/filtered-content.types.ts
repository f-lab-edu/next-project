import { ComponentPropsWithoutRef, ComponentType } from "react";

import FilteredMovieListModel from "@/entities/filter/model/filtered-movie-list";
import { MovieListItemModel } from "@/entities/movie-list";

export interface FilteredContentProps extends ComponentPropsWithoutRef<"element"> {
  movieList: FilteredMovieListModel;
  itemComp: ComponentType<{ movieInfo: MovieListItemModel }>;
}
