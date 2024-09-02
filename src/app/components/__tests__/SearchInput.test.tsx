import "@testing-library/jest-dom";
import { screen, fireEvent, waitFor, act } from "@testing-library/react";
import SearchInput from "../SearchInput";
import { reduxStore, renderWithProviders } from "@/mocks/TestUtil";
import { resetStore } from "@/lib/features/movies/moviesSlice";

jest.useFakeTimers();
afterEach(() => {
  reduxStore.dispatch(resetStore());
});

describe("Search Input", () => {
  it("renders input and fire input search", async () => {
    renderWithProviders(<SearchInput />);
    const input = screen.getByPlaceholderText("Search movies");
    expect(input).toBeInTheDocument();
    act(() => {
      fireEvent.change(input, { target: { value: "inc" } });
      jest.advanceTimersByTime(100);
      const noresult = screen.getByText("No result");
      expect(noresult).not.toBeVisible();
      jest.advanceTimersByTime(200);
    });
    await waitFor(() =>
      expect(screen.getByText("Inception")).toBeInTheDocument(),
    );
    act(() => {
      fireEvent.change(input, { target: { value: "" } });
    });
    await waitFor(() =>
      expect(screen.queryByText("Inception")).not.toBeInTheDocument(),
    );
  });

  it("should handle focus and blur", async () => {
    renderWithProviders(<SearchInput />);
    const input = screen.getByPlaceholderText("Search movies");
    expect(input).toHaveValue("");
    act(() => {
      fireEvent.change(input, { target: { value: "" } });
      jest.advanceTimersByTime(400);
      fireEvent.focusIn(input);
    });
    await waitFor(() => expect(screen.getByText("No result")).toBeVisible());
    act(() => {
      fireEvent.blur(input);
      jest.advanceTimersByTime(1100);
    });
    await waitFor(() =>
      expect(screen.getByText("No result")).not.toBeVisible(),
    );
  });

  it("click search result", async () => {
    renderWithProviders(<SearchInput />);
    const input = screen.getByPlaceholderText("Search movies");
    expect(input).toBeInTheDocument();
    act(() => {
      fireEvent.change(input, { target: { value: "inc" } });
      jest.advanceTimersByTime(100);
      const noresult = screen.getByText("No result");
      expect(noresult).not.toBeVisible();
      jest.advanceTimersByTime(200);
    });
    await waitFor(() =>
      expect(screen.getByText("Inception")).toBeInTheDocument(),
    );
    act(() => {
      fireEvent.click(screen.getByText("Inception").parentElement);
    });
    await waitFor(() =>
      expect(screen.getByTestId("searchResult")).not.toBeVisible(),
    );
  });
});
