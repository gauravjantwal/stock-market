import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import jfs from "../Images/jfs.svg";
import { NavLink } from "react-router-dom";

const TopGainers = (props) => {
  debugger;
  const [topgainers, setTopgainers] = useState(props.topgainers);
  const [showCreateWatchlist, setshowCreateWatchlist] = useState(false);

  const handleClick = () => {
    setshowCreateWatchlist(true);
  };
  //const [isOpen, setIsOpen] = useState(false);

  //const togglePopup = () => {
   // setIsOpen(!isOpen);
  //};
 
  console.log(props);
  return (
    <div className="section">
      <div className="row">
        <div className="col-md-8">
          <h5 className="section-title">TopGainers</h5>
        </div>
        <div className="col-md-2">
          <button onClick={handleClick}>Create Watchlists</button>
        </div>
        <div className="col-md-2">
          <NavLink to={"/watchlist"}>View All</NavLink>
        </div>
      </div>
      <div className="dashboard">
       <div className="card">
        <div className="card-body">
        <Row className="justify-content-center">
        {topgainers.top_gainers.map((stock, index) => (
          <div key={index}>
                  <Col md="12">
                    <Card.Img src={jfs} alt={stock.ticker} />
                    <br />
                    <NavLink
                      className="card-title text-color"
                      to={`/details/${stock.ticker}`}
                    >
                      {stock.ticker}
                    </NavLink>
                    <div className="text">
                      &#8377; <span>{stock.change_amount}</span>
                      <p>
                        <span className="text-color-green">{stock.price}</span>
                      </p>
                    </div>
                  </Col>
              </div>          
        ))}
        </Row>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TopGainers;
