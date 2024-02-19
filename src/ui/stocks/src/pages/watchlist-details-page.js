import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
// import {  useLocation, Await } from "react-router-dom";
import { DeatilsFinancials } from "./details/details-financials";
import Fundamentals from "./details/fundamentals";
import * as DetailsService from "../services/detailsservice";
import CompanyDetails from "./details/companydetails";
import Stocksgraph from "./details/stocksgraph";
import AboutCompany from "./details/aboutcompany";
import Loader from "./loader";


const WatchListDetailsPage = () => {
  const { id } = useParams();
  const name = id;
  let location = useLocation();
  const [resp, setData] = useState(null);

  useEffect(() => {
    let overviewresp = null;
    let incomestatementresp = null;
    let stocks = null;
    const fetchData = async () => {
      try {
        const respOveriew = await DetailsService.OverView(name);
        overviewresp = respOveriew.data;
      } catch (err) {
        console.log("Error occured when fetching OverView");
      }
      try {
        const respIncome = await DetailsService.Incomestatement(name);
        incomestatementresp = respIncome.data;
      } catch (err) {
        console.log("Error occured when fetching Incomestatement");
      }
      try {
        const respstocks = await DetailsService.GetStocksData(name);
        stocks = respstocks.data;
      } catch (err) {
        console.log("Error occured when fetching GetStocksData");
      }
      setData({
        OverView: overviewresp,
        Income: incomestatementresp,
        StocksRange: stocks,
      });
    };

    fetchData();
  }, []);

  return (
    <>
      {resp ? (
        <div className="details mb-5">
          <div className="container mb-3">
            <CompanyDetails OverView={resp.OverView}></CompanyDetails>
          </div>
          <div className="clearfix"></div>
          <div className="container mb-3">
            <Stocksgraph Stocks={resp.StocksRange}></Stocksgraph>
          </div>
          <div className="clearfix"></div>
          <div className="container mb-3">
            <Fundamentals OverView={resp.OverView}></Fundamentals>
          </div>
          <div className="clearfix"></div>
          <div className="container mb-3">
            <DeatilsFinancials
              id={name}
              Income={resp.Income}
            ></DeatilsFinancials>
          </div>
          <div className="clearfix"></div>
          <div className="container mb-3">
            <AboutCompany OverView={resp.OverView}></AboutCompany>
          </div>
        </div>
      ) : (
        <Loader></Loader>
      )}
    </>
  );
};
export default WatchListDetailsPage;
