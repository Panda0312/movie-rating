import { initializeMovieState } from "@/lib/features/movies/moviesSlice";
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";

import movies from "./data/movies.json";
import { makeStore } from "@/lib/store";

export const reduxStore = makeStore();

export const renderWithProviders = (ui: ReactNode) => {
  reduxStore.dispatch(initializeMovieState(movies));
  return render(<Provider store={reduxStore}>{ui}</Provider>);
};
