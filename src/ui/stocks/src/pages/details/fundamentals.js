import React from "react";

const Fundamentals = (props) => {
  const OverView = props.OverView;
  const convertdollerintomillions = (dollers) => {
    return Math.round(dollers / 1000000, 2);
  };
  return (
    <>
      {OverView && (
        <>
          <h5 className="section-title mb-2">Fundamentals</h5>
          <table
            className="table table-borderless fundamentalstable"
            border="no-border"
          >
            <tbody>
              <tr>
                <td className="gray-text-color">Market Cap</td>
                <td>
                  $ {convertdollerintomillions(OverView.MarketCapitalization)}{" "}
                  MM
                </td>
                <td className="gray-text-color">ROE</td>
                <td>{OverView.ReturnOnEquityTTM}%</td>
              </tr>
              <tr>
                <td className="gray-text-color">P/E Ratio</td>
                <td>{OverView.PERatio}</td>
                <td className="gray-text-color">EPS(TTM)</td>
                <td>{OverView.EPS}</td>
              </tr>
              <tr>
                <td className="gray-text-color">P/B Ratio</td>
                <td>{OverView.PriceToBookRatio}</td>
                <td className="gray-text-color">Dividend Yield</td>
                <td>{OverView.DividendYield}%</td>
              </tr>
              <tr>
                <td className="gray-text-color">Industry P/E</td>
                <td>{OverView.TrailingPE}</td>
                <td className="gray-text-color">Book Value</td>
                <td>{OverView.BookValue}%</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
};
export default Fundamentals;
