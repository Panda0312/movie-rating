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
    renderWithProviders(<Page params={{ id: "0001" }} />);
    const pageRoot = screen.getByTestId("detailPage");
    expect(pageRoot).toBeInTheDocument();
  });
});
