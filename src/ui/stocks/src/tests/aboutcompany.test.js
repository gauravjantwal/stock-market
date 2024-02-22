import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutCompany from "../pages/details/aboutcompany";

const testdata =  {
    Name: "IBM",
    Description: "Test data",
};

test("Render aboutcompany component", () => {
render(<AboutCompany OverView={testdata} />);

const element = screen.getByText(/About IBM/i);

expect(element).toBeInTheDocument();
});
