import React from "react";
import DashboardCompanies from "./dashboardcompanies";
import DashboardIndex from "./dashboardIndex";
import DashboardTopGainers from "./dashboardTopGainers";
import DashboardTopLosers from "./dashboardTopLosers";
import DashboardStockNews from "./dashboardStockNews";


const Dashboard = () => {
  return (
    <>
      <div className="clearfix m-15">
        <DashboardIndex></DashboardIndex>
        <br />
        <DashboardCompanies name="Most Bought"></DashboardCompanies>
        <br />
        <DashboardTopGainers name="Top Gainers"></DashboardTopGainers>
        <br />
        <DashboardStockNews name="Stocks In News"></DashboardStockNews>
        <br />
        <DashboardTopLosers name="Top Losers"></DashboardTopLosers>
        <br />
      </div>
    </>
  );
};

export default Dashboard;
