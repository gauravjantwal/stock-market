import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CompanyDetails from "../pages/details/companydetails";

const testdata =  {
    Name: "IBM",
    Description: "Test data",
    Country:"USA",
    Symbol:"IBM"
};

test("Render company details component", () => {
render(<CompanyDetails OverView={testdata} />);

const element = screen.getByText(/IBM/i);

expect(element).toBeInTheDocument();
});
