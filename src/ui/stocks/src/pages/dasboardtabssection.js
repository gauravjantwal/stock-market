import React, { useState } from "react";
import DashboardCompanies from "./dashboardcompanies";

function Dasboardtabssection(props) {
  const [tab, setTab] = useState(1);

  return (
    <div className="section">
      <div className="m-2 clearfix">
        <h5 className="section-title">{props.name}</h5>
      </div>
      <div>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={tab === 1 ? "nav-link active" : "nav-link"}
              onClick={() => setTab(1)}
            >
              Large
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={tab === 2 ? "nav-link active" : "nav-link"}
              onClick={() => setTab(2)}
            >
              Mid
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={tab === 3 ? "nav-link active" : "nav-link"}
              onClick={() => setTab(3)}
            >
              Small
            </button>
          </li>
        </ul>
        <div className="tab-content pt-5" id="tab-content">
          <div
            className={tab === 1 ? "tab-pane active" : "tab-pane"}
            id="simple-tabpanel-0"
            role="tabpanel"
            aria-labelledby="simple-tab-0"
          >
            <DashboardCompanies name=""></DashboardCompanies>
          </div>

          <div
            className={tab === 2 ? "tab-pane active" : "tab-pane"}
            id="simple-tabpanel-1"
            role="tabpanel"
            aria-labelledby="simple-tab-1"
          >
            Tab 2 selected
          </div>

          <div
            className={tab === 3 ? "tab-pane active" : "tab-pane"}
            id="simple-tabpanel-2"
            role="tabpanel"
            aria-labelledby="simple-tab-2"
          >
            Tab 3 selected
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dasboardtabssection;
