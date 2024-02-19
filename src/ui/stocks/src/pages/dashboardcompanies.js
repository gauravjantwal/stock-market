import React, { useState } from "react";
import { Card, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import jfs from "./Images/jfs.svg";

const MostBought = (props) => {
  const [mostbought, setMostBought] = useState(props.mostbought);
 
  return (
    <div className="section">
        <div className="col-md-8">
          <h5 className="section-title">Most Bought</h5>
        </div>
      <div className="dashboard">
       <div className="card">
        <div className="card-body">
        <Row className="justify-content-center">
        {mostbought.most_actively_traded.map((stock, index) => (
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

export default MostBought;
