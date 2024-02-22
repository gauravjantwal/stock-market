import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Fundamentals from "../pages/details/fundamentals";

const testdata =  {
    Name: "IBM",
    Description: "Test data",
    Country:"USA",
    Symbol:"IBM",
};

test("Render Fundamentals component", () => {
render(<Fundamentals OverView={testdata} />);

const element = screen.getByText(/Fundamentals/i);

expect(element).toBeInTheDocument();
});
