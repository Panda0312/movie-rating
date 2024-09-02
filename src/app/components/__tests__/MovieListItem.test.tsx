import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import MovieListItem from "../MovieListItem";

const movie = {
  id: "0001",
  title: "Inception",
  genre: "Science Fiction",
  releaseDate: "2010-07-16",
  rating: 8.8,
  ratedNumber: 20,
  thumbnail:
    "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
};
describe("Movie ListItem", () => {
  it("renders with separator and detail", () => {
    render(<MovieListItem movie={movie} />);
    const detailLink = screen.getByText("View Details");
    expect(detailLink).toBeInTheDocument();
    const dividers = screen.queryAllByRole("separator");
    expect(dividers.length).toBe(1);
  });

  it("renders without separator and detail", () => {
    render(<MovieListItem movie={movie} noDetail hideDivider />);
    const detailLink = screen.queryByText("View Details");
    expect(detailLink).not.toBeInTheDocument();
    const dividers = screen.queryAllByRole("separator");
    expect(dividers.length).toBe(0);
  });
});
