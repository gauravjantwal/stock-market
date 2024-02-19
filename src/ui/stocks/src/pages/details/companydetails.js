import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import defualtlogo from '../Images/default.png'

function CompanyDetails(props) {
  const OverView = props.OverView;
  const img = `https://eodhd.com/img/logos/US/${OverView?.Symbol}.png`;
  const [logoimg, setImage]=useState(img);
  return (
    <>
      {OverView?.Symbol && (
        <div className="company">
          <div className="card mb-3">
            <div className="row g-0 p-3">
              <div className="col-md-2">
                <img
                  src={logoimg}
                  alt={OverView.Symbol}
                  className="img-fluid rounded-start"
                  onError={()=>setImage(defualtlogo)}
                />
              </div>
              <div className="col-md-10">
                <div className="card-body">
                  <h5 className="card-title mb-2">{OverView.Name}</h5>
                  <h6 className="card-subtitle mb-2">
                    &#36; {OverView.RevenuePerShareTTM}
                  </h6>
                  <p className="card-text"><span>Country : {OverView.Country}</span>&nbsp; &nbsp;<span>Exchange : {OverView.Exchange}</span></p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CompanyDetails;
