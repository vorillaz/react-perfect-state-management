import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

const Sanity = () => <div>Sanity checking</div>;

describe("perfect state management sanity", () => {
  it("should pass a sanity spec", () => {
    expect(1).toBe(1);
  });

  it("should pass a React sanity check", () => {
    const { getByText } = render(<Sanity />);
    expect(getByText("Sanity checking")).toBeInTheDocument();
  });
});
