"use client";
import { useAppSelector } from "@/lib/hooks";
import MovieList from "./components/MovieList";

export default function Home() {
  const movies = useAppSelector((state) => state.moviesSlice.moviesList);

  return (
    <main data-testid="homePage" className="bg-blue-200 p">
      <MovieList movies={movies} />
    </main>
  );
}
