import { Link } from "react-router-dom";
import tata from "./Images/tata-logo.png";
import airtel from "./Images/Airtel1.png";
import coalindia from "./Images/Coal-India.png";
import IOCL from "./Images/IOCL.png";
import jfs from "./Images/jfs.svg";
import maruthi from "./Images/maruthi.png";
import nykaa from "./Images/Nykaa.svg";
import sbi from "./Images/SBI.png";
import shree from "./Images/shree.png";
import UPL from "./Images/UPL.png";
import { React, useEffect, useState } from "react";
import axios from "axios";
import * as DashboardService from "../services/dashboardService";
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
