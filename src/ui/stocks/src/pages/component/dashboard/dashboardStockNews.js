import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import { stockNews  } from "./stockNews";



function StockNews(props) {
    return (
        <div className="section">
            <div className="m-2 clearfix">
                <h5 className="section-title">{props.name}</h5>
            </div>
            <div className="dashboard">
            {stockNews.map((stock, index) => (
                    <div key={index}>
                        <div className="card">
                            <div className="card-body">
                                <Card.Img src={stock.image} alt={stock.name} />
                                <br />
                                <a className="card-title text-color" href="#">{stock.name}</a>
                                <div className="text">
                                    &#8377; <span>{stock.price}</span>
                                    <p>
                                        <span className="text-color-green">{stock.change}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StockNews;