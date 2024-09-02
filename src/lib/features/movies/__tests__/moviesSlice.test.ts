import { makeStore } from "@/lib/store";
import {
  initializeMovieState,
  resetStore,
  updateSearchStr,
  updateUserComments,
  updateUserRate,
} from "../moviesSlice";

const testMovie = {
  id: "0001",
  title: "Inception",
  genre: "Science Fiction",
  releaseDate: "2010-07-16",
  rating: 8.8,
  ratedNumber: 20,
  thumbnail:
    "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
};

describe("moviesSlice test", () => {
  it("should init store", () => {
    const store = makeStore();
    store.dispatch(initializeMovieState([testMovie]));
    const state = store.getState().moviesSlice;
    expect(state.moviesList[0]).toEqual(testMovie);
  });

  it("should update search string", () => {
    const store = makeStore();
    store.dispatch(updateSearchStr("xyz"));
    const state = store.getState().moviesSlice;
    expect(state.searchStr).toEqual("xyz");
  });

  it("should update user rate", () => {
    const store = makeStore();
    store.dispatch(initializeMovieState([testMovie]));
    store.dispatch(updateUserRate({ id: testMovie.id, rating: 9 }));
    const state = store.getState().moviesSlice;
    expect(state.userRate[testMovie.id]).toBe(9);
  });

  it("should update user comment", () => {
    const store = makeStore();
    store.dispatch(initializeMovieState([testMovie]));
    store.dispatch(
      updateUserComments({ id: testMovie.id, comment: "test comment" }),
    );
    const state = store.getState().moviesSlice;
    expect(state.userComments[testMovie.id][0].text).toBe("test comment");
  });

  it("should reset store", () => {
    const store = makeStore();
    store.dispatch(resetStore());
    const state = store.getState().moviesSlice;
    expect(state.moviesList).toEqual([]);
  });
});
