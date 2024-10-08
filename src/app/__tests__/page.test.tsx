import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import Page from "../page";
import { reduxStore, renderWithProviders } from "@/mocks/TestUtil";
import { resetStore } from "@/lib/features/movies/moviesSlice";

afterAll(() => {
  reduxStore.dispatch(resetStore());
});

describe("Page", () => {
  it("renders a heading", () => {
    renderWithProviders(<Page />);
    const pageRoot = screen.getByTestId("homePage");
    expect(pageRoot).toBeInTheDocument();
  });
});
