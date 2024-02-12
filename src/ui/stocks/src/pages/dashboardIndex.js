import React from "react";

function DashboardIndex() {
  return (
    <div className="section clearfix">
      <div className="m-2 clearfix">
        <h5 className="section-title float-left">Index</h5>
        <span className="float-right ">
          <a className="text-color-green" href="#">More indices</a>
        </span>
      </div>
      <div className="row indexsection">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title section-title">NIFTY50</h6>
              <p className="card-text">
                <span>20,34.345</span>{" "}
                <span className="text-color-green">76.85(0.35%)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title section-title">NIFTY50</h6>
              <p className="card-text">
                <span>20,34.345</span>{" "}
                <span className="text-color-green">76.85(0.35%)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">SENSEX</h6>
              <p className="card-text">
                <span>20,34.345</span>{" "}
                <span className="text-color-green">76.85(0.35%)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">BANKNIFTY</h6>
              <p className="card-text">
                <span>20,34.345</span>{" "}
                <span className="text-color-green">76.85(0.35%)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardIndex;
