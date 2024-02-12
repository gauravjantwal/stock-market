import React from "react";
import DashboardIndex from "./dashboardIndex";
import DashboardCompanies from "./dashboardcompanies";
import Dasboardtabssection from "./dasboardtabssection";
const Dashboard = () => {
  return (
    <div className="clearfix m-15">
      <p className="section-title">
        <small>MARKET CLOSES AT 3:30 PM</small>
      </p>
      <DashboardIndex></DashboardIndex>
      <br/>
      <DashboardCompanies name="Most Bought"></DashboardCompanies>
      <br/>
      <Dasboardtabssection name="Top Gainers"></Dasboardtabssection>
      <br/>
      <DashboardCompanies name="Stocks In News"></DashboardCompanies>
      <br/>
      <Dasboardtabssection name="Top Losers"></Dasboardtabssection>
      
    </div>
  );
};

export default Dashboard;
