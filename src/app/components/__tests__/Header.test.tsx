import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import Header from "../Header";
import { reduxStore, renderWithProviders } from "@/mocks/TestUtil";
import { resetStore } from "@/lib/features/movies/moviesSlice";

afterAll(() => {
  reduxStore.dispatch(resetStore());
});

describe("Page", () => {
  it("renders a heading", () => {
    renderWithProviders(<Header />);
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });
});
