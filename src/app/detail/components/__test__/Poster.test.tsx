import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Poster from "../Poster";

describe("Poster", () => {
  it("renders Poster and fire click events", async () => {
    render(<Poster imgSrc={"https://expamle.com/test.img"} />);
    const posterImg = screen.getByTestId("posterImg");
    expect(posterImg).toHaveAttribute("src", "https://expamle.com/test.img");
    // click poster to show large Img
    fireEvent.click(posterImg);
    const largeImg = screen.getByTestId("largeImg");
    await waitFor(() => expect(largeImg).toBeVisible());
    // click largeImg to close it
    fireEvent.click(largeImg);
    expect(largeImg).not.toBeVisible();
  });
});
