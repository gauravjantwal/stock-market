import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { DeatilsFinancials } from "./deatils-financials";
import tata from "./Images/tata-logo.png";

const WatchListDetailsPage = () => {
  const { name } = useParams();
  let location = useLocation();
  console.log(location);
  return (
    <>
      <div className="container">
        <div>
          <h3>Watch list details</h3>
          <p>{name}</p>
        </div>
        <div>
          <DeatilsFinancials id={name}></DeatilsFinancials>
        </div>
      </div>
    </>
  );
};
export default WatchListDetailsPage;
