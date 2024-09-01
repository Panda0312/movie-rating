import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page params={{ id: "0001" }} />);

    const heading = screen.getByText("Movie Detail");

    expect(heading).toBeInTheDocument();
  });
});
