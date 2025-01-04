import { createContext } from "@repo/ui/utils";
import { useReducer } from "react";

import { FilterContext, FilterReducerActions, FilterReducerState, UseFilterArgs } from "./filter-context.types";

const [FilterContextProvider, useContext] = createContext<FilterContext>();

export const FilterProvider = FilterContextProvider;
export const useFilterContext = useContext;

const filterReducer = (state: FilterReducerState, action: FilterReducerActions): FilterReducerState => {
  switch (action.type) {
    case "TOGGLE_GENRES": {
      const genreId = action.payload;

      const newGenres = new Set(state.checkedGenres);

      if (newGenres.has(genreId)) {
        newGenres.delete(genreId);
      } else {
        newGenres.add(genreId);
      }
      return { ...state, checkedGenres: newGenres };
    }
    default:
      return state;
  }
};

export const useFilter = (args: UseFilterArgs = {}) => {
  const { defaultCheckedGenres = [] } = args;
  return useReducer(filterReducer, { checkedGenres: new Set(defaultCheckedGenres) });
};
