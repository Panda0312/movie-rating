import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import MovieList from "../MovieList";

describe("Movie List", () => {
  it("renders without movie", () => {
    render(<MovieList movies={[]} />);
    const emptyHint = screen.getByText("No result");
    expect(emptyHint).toBeInTheDocument();
  });

  it("renders with movie", () => {
    render(
      <MovieList
        movies={[
          {
            id: "0001",
            title: "Inception",
            genre: "Science Fiction",
            releaseDate: "2010-07-16",
            rating: 8.8,
            ratedNumber: 20,
            thumbnail:
              "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
          },
        ]}
      />,
    );
    const titleEle = screen.getByText("Inception");
    expect(titleEle).toBeInTheDocument();
  });
});
