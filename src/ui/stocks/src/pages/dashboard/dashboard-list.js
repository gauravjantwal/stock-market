import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import jfs from "../Images/jfs.svg";
import { NavLink } from "react-router-dom";
import stockslogo from "../Images/stocks-logo.png";

function DashboardList(props) {
  const [data, setdata] = useState(props?.data);

  return (
    <div className="section mb-3">
      <div className="row">
        <div className="col-md-9">
          <h5 className="section-title">{props?.title}</h5>
        </div>
        {props?.showwatchlist && (
          <div className="col-md-3 ">
            <p>
              <NavLink className="ml-5 text-color-green" to={"/watchlist"}>All Watchlists</NavLink>
              <NavLink className="ml-3 text-color-green" to={"/watchlist"}>View All</NavLink>
            </p>
          </div>
        )}
      </div>
      <div className="dashboard">
        <div className="row">
          {data?.map((stock, index) => (
            <div className="col-sm-2 mb-3" key={index}>
              <div className="card">
                <div className="card-body">
                  <Card.Img className="stocks-card-img" src={stockslogo} alt={stock.ticker} />
                  <br />
                  <NavLink
                    className="card-title text-color-green"
                    to={`/details/${stock.ticker}`}
                  >
                    {stock.ticker}
                  </NavLink>
                  <div className="text">
                    <p>
                      $ <span>{stock.price}</span>
                      <span className="text-color-green ml-1">
                        ({stock.change_amount})
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardList;
