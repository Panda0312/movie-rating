import { RootState } from "@/lib/store";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TMovieState = {
  moviesList: [],
  userFeedback: {},
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    initializeMovieState: (state, action: PayloadAction<TMovie[]>) => {
      state.moviesList = action.payload;
    },
    updateSearchStr: (state, action: PayloadAction<string>) => {
      state.searchStr = action.payload;
    },
    updateUserRate: (
      state,
      action: PayloadAction<{ id: string; rating: number | null }>,
    ) => {
      const { id, rating } = action.payload;
      const prev = state.userFeedback[id];
      const idx = state.moviesList.findIndex((m) => m.id === id);
      const old = state.moviesList[idx];
      let newMovie = old;
      if (!prev || prev.rating === undefined || prev.rating === null) {
        newMovie = {
          ...old,
          ratedNumber: old.ratedNumber + 1,
          rating: Number(
            (
              (old.rating * old.ratedNumber + rating) /
              (old.ratedNumber + 1)
            ).toFixed(1),
          ),
        };
      } else {
        newMovie = {
          ...old,
          rating: Number(
            (
              (old.rating * old.ratedNumber - prev.rating + rating) /
              old.ratedNumber
            ).toFixed(1),
          ),
        };
      }
      state.moviesList.splice(idx, 1, newMovie);
      state.userFeedback[id] = { ...prev, rating };
    },
  },
});

export const selectMovies = (state: RootState) => state.moviesSlice.moviesList;
export const selectSearchStr = (state: RootState) =>
  state.moviesSlice.searchStr || "";

export const selectUserFeedback = (state: RootState) =>
  state.moviesSlice.userFeedback;

export const selectFilteredMovies = createSelector(
  [selectMovies, selectSearchStr],
  (movies, search) => {
    return search.length
      ? movies.filter((m) =>
          m.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        )
      : [];
  },
);

export const { initializeMovieState, updateSearchStr, updateUserRate } =
  moviesSlice.actions;
export default moviesSlice.reducer;
