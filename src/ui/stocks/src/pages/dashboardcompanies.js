import React from "react";
import emidslogo from "../emids-logo.jpg";

function Mostbought(props) {
  return (
    <div className="section">
      <div className="m-2 clearfix">
        <h5 className="section-title">{props.name}</h5>
      </div>
      <div className="row section2">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-color-green">NHPC</h5>
              <div className="card-text">
                <p>
                  &#8377; <span>111.25</span>
                </p>
                <p>
                  <span className="text-color-green">111.00 (10.35%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-color-green">ABC</h5>
              <p className="card-text">
                &#8377; <span>13.25</span>
              </p>
              <p className="card-text">
                <span className="text-color-green">11.00 (8.35%)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-color-green">XYZ</h5>
              <p className="card-text">
                &#8377; <span>92.25</span>
              </p>
              <p className="card-text">
                <span className="text-color-green">92.00 (9.35%)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mostbought;
