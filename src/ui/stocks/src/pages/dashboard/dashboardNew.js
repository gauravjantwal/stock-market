import { Link } from "react-router-dom";
import { React, useEffect, useState } from "react";
import axios from "axios";
import * as DashboardService from "../../services/dashboardService";
import { Card, Row, Col } from "react-bootstrap";
import TopGainers from "./TopGainers";
import TopLosers from "./TopLosers";
import DashboardIndex from "./dashboardIndex";
import DashboardCompanies from "./dashboardcompanies";

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
    console.log(post);
  }, []);

  return (
    <>
      {post && (
        <div className="clearfix m-15">
          <DashboardIndex></DashboardIndex>
          <br />
          <TopGainers topgainers={post.TopGainersLosers}></TopGainers>
          <br />
          <DashboardCompanies mostbought={post.TopGainersLosers}></DashboardCompanies>
          <br />
          <TopLosers toplosers={post.TopGainersLosers}></TopLosers>
          <br />
        </div>
      )}
    </>
  );
};

export default DashboardNew;
