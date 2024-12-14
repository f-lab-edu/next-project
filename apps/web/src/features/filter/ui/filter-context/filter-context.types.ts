import { Dispatch } from "react";

export interface FilterReducerState {
  checkedGenres: Set<number>;
}

export type FilterReducerActions = {
  type: "TOGGLE_GENRES";
  payload: number;
};

export interface FilterContext extends FilterReducerState {
  dispatch: Dispatch<FilterReducerActions>;
}

export interface UseFilterArgs {
  defaultCheckedGenres?: number[];
}
