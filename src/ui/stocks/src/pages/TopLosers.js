import React, { useState } from "react";
import { Card, Row, Col } from 'react-bootstrap';
import maruthi from "./Images/maruthi.png";
import { NavLink } from "react-router-dom";


const TopLosers = (props) => {
    const [toplosers, setTopLosers] = useState(props.toplosers);

    return (
        <div className="section">
            <div className="m-2 clearfix">
                <h5 className="section-title">TopLosers</h5>
            </div>
            <div className="dashboard">
            <div className="card">
            <div className="card-body">
            <Row className="justify-content-center">
            {toplosers.top_losers.map((stock, index) => (
                    <div key={index}>
                            <Col md="12">
                                <Card.Img src={maruthi} alt={stock.ticker} />
                                <br />
                                <NavLink className="card-title text-color"to={`/details/${stock.ticker}`} >{stock.ticker}>{stock.ticker}</NavLink>
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
    )
}

export default TopLosers;
