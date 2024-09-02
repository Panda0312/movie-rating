import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/react";
import Comments from "../Comments";
import { reduxStore, renderWithProviders } from "@/mocks/TestUtil";
import { resetStore } from "@/lib/features/movies/moviesSlice";

afterAll(() => {
  reduxStore.dispatch(resetStore());
});

describe("Comments", () => {
  it("renders comment with input", () => {
    renderWithProviders(<Comments id={"0001"} />);
    const textArea = screen.getByRole("textbox");
    expect(textArea).toBeInTheDocument();
    const submitButton = screen.getByText("Submit");
    fireEvent.change(textArea, { target: { value: "test comment" } });
    fireEvent.click(submitButton);
    expect(textArea).toHaveValue("");
    expect(screen.getByText("test comment")).toBeInTheDocument();
  });

  it("should clear input", () => {
    renderWithProviders(<Comments id={"0001"} />);
    const textArea = screen.getByRole("textbox");
    expect(textArea).toBeInTheDocument();
    const cancelBtn = screen.getByText("Cancel");
    fireEvent.change(textArea, { target: { value: "test comment" } });
    fireEvent.click(cancelBtn);
    expect(textArea).toHaveValue("");
  });
});
