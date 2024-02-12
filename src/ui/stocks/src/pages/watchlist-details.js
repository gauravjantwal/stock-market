import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const WatchListDetails = ({ rowData }) => {
    const [buttonText, setButtonText] = useState('Buy');

  const handleClick = (text) => {
    // Change the text of the button
    setButtonText(text);
  };
    // Render another table based on the clicked row data
    return (
      <table className="table" border="no-border">
        <thead>
          <tr key={rowData.companyName}>
            <th>{rowData.companyName}
    <br></br>Rs.{rowData.marketPrice}({rowData.dayChange}%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><button className="btn btn-link" onClick={() => handleClick('Buy')}>Buy</button> 
            <button className="btn btn-link" onClick={() => handleClick('Sell')}>Sell</button></td>         
          </tr>
          <tr>
          <td><button className="btn btn-outline-success">Delivery</button> &nbsp;
            <button className="btn btn-outline-success">Intraday</button></td>
          </tr>
          <tr>
              <p>Qty NSE</p>
              <p>Price Market</p>
          </tr>
          <tr>
              <p>Order will be executed at best price in market</p>
          </tr>
          <tr>
              <td>Balance: 6532 &nbsp; &nbsp;&nbsp;&nbsp;Required : 0</td>
          </tr>
          <tr>
          <td><button className={`btn ${buttonText == 'Buy' ? 'btn-success' : 'btn-danger'}`}>{buttonText}</button></td>
          </tr>
        </tbody>
      </table> 
    );
  };
  

export default WatchListDetails;