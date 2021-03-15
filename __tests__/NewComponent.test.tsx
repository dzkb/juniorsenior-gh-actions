import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import NewComponent from "../pages/NewComponent";

describe("Some Test Suit", () => {
  it("Some Test Case", () => {
    render(<NewComponent>message</NewComponent>);
    expect(screen.getByText("message")).toBeInTheDocument();
  });
});
