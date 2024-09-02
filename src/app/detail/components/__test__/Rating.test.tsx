import "@testing-library/jest-dom";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import Rating from "../Rating";
import { reduxStore, renderWithProviders } from "@/mocks/TestUtil";
import { resetStore } from "@/lib/features/movies/moviesSlice";

afterEach(() => {
  reduxStore.dispatch(resetStore());
});

describe("Rating", () => {
  it("renders Rating with interactions", async () => {
    const movieId = "0001";
    renderWithProviders(<Rating userRate={0} movieId={movieId} />);
    const rateBtn = screen.getByTestId("rate-btn");
    expect(rateBtn).toBeInTheDocument();
    fireEvent.click(rateBtn);
    await waitFor(() => expect(screen.getByTestId("rateStar-1")).toBeVisible());
    // mouse over event
    const rate8 = screen.getByTestId("rateStar-8");
    expect(rate8).toBeVisible();
    fireEvent.mouseOver(rate8.parentElement);
    expect(rate8).toHaveStyle({ color: "#f5c518" });
    // mouse leave
    fireEvent.mouseLeave(rate8);
    expect(rate8).toHaveStyle({ color: "white" });
    // rate handler
    fireEvent.click(rate8.parentElement);
    await waitFor(() => expect(rate8.parentElement).not.toBeVisible());
    const rateValue = reduxStore.getState().moviesSlice.userRate[movieId];
    expect(rateValue).toBe(8);
    // change rate
    fireEvent.click(rateBtn);
    await waitFor(() => expect(screen.getByTestId("rateStar-1")).toBeVisible());
    const rate6 = screen.getByTestId("rateStar-6");
    fireEvent.click(rate6.parentElement);
    await waitFor(() => expect(rate6.parentElement).not.toBeVisible());
    const rateValue2 = reduxStore.getState().moviesSlice.userRate[movieId];
    expect(rateValue2).toBe(6);
  });

  it("renders Rating with rates", () => {
    const movieId = "0001";
    renderWithProviders(<Rating userRate={6} movieId={movieId} />);
    const rateBtn = screen.getByTestId("rate-btn");
    expect(rateBtn).toHaveTextContent("6");
  });
});
