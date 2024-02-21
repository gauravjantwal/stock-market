import { Link } from "react-router-dom";
import { React, useEffect, useState } from "react";
import axios from "axios";
import * as DashboardService from "../../services/dashboardService";
import { Card, Row, Col } from "react-bootstrap";
import TopGainers from "./TopGainers";
import TopLosers from "./TopLosers";
import DashboardIndex from "./dashboardIndex";
import DashboardCompanies from "./dashboardcompanies";
import Loader from "../loader";
import DashboardList from "./dashboard-list";

const DashboardNew = () => {
  const [post, setData] = useState(null);

  useEffect(() => {
    let dashboardNews = null;
    let topGainersLosers = null;

    const fetchData = async () => {
      const dashboard = await DashboardService.DashboardNews();
      dashboardNews = dashboard.data;

      const GainersLosers = await DashboardService.TopGainersLosers();
      topGainersLosers = GainersLosers.data;

      setData({
        DashboardNews: dashboardNews,
        TopGainersLosers: topGainersLosers,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <marquee direction="right">
        <p className="section-title">MARKET CLOSES AT 3:30 PM</p>
      </marquee>

      {post ? (
        <>
          <div className="clearfix m-15">
            <DashboardList
              data={post.TopGainersLosers?.top_gainers}
              showwatchlist={true}
              title={"Top Gainers"}
            ></DashboardList>
            <DashboardList
              data={post.TopGainersLosers?.most_actively_traded}
              title={"Most Bought"}
            ></DashboardList>
            <DashboardList
              data={post.TopGainersLosers?.top_losers}
              title={"Top Losers"}
            ></DashboardList>
          </div>
        </>
      ) : (
        // <div className="clearfix m-15">
        //   <DashboardIndex></DashboardIndex>
        //   <br />
        //   <TopGainers topgainers={post.TopGainersLosers}></TopGainers>
        //   <br />
        //   <DashboardCompanies mostbought={post.TopGainersLosers}></DashboardCompanies>
        //   <br />
        //   <TopLosers toplosers={post.TopGainersLosers}></TopLosers>
        //   <br />
        // </div>
        <Loader></Loader>
      )}
    </div>
  );
};

export default DashboardNew;
