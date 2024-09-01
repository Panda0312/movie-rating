import { RootState } from "@/lib/store";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TMovieState = {
  moviesList: [],
  userRate: {},
  userComments: {},
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
      const prevRate = state.userRate[id];
      const idx = state.moviesList.findIndex((m) => m.id === id);
      const old = state.moviesList[idx];
      let newMovie = !prevRate
        ? {
            ...old,
            ratedNumber: old.ratedNumber + 1,
            rating: Number(
              (
                (old.rating * old.ratedNumber + rating) /
                (old.ratedNumber + 1)
              ).toFixed(1),
            ),
          }
        : {
            ...old,
            rating: Number(
              (
                (old.rating * old.ratedNumber - prevRate + rating) /
                old.ratedNumber
              ).toFixed(1),
            ),
          };
      state.moviesList.splice(idx, 1, newMovie);
      state.userRate[id] = rating;
    },
    updateUserComments: (
      state,
      action: PayloadAction<{ id: string; comment: string }>,
    ) => {
      const { id, comment } = action.payload;
      state.userComments[id] = [
        { text: comment, time: new Date().getTime() },
        ...(state.userComments[id] || []),
      ];
    },
  },
});

export const selectMovies = (state: RootState) => state.moviesSlice.moviesList;
export const selectSearchStr = (state: RootState) =>
  state.moviesSlice.searchStr || "";

export const selectUserRate = (state: RootState) => state.moviesSlice.userRate;
export const selectUserComments = (state: RootState) =>
  state.moviesSlice.userComments;

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

export const {
  initializeMovieState,
  updateSearchStr,
  updateUserRate,
  updateUserComments,
} = moviesSlice.actions;
export default moviesSlice.reducer;
