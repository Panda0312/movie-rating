"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import { initializeMovieState } from "../lib/features/movies/moviesSlice";

export default function StoreProvider({
  movies,
  children,
}: {
  movies: TMovie[];
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(initializeMovieState(movies));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
