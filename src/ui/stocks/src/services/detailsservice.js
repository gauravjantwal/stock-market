import axios from "axios";
import UIConfig from "../config/config.json"

const authConfig = {
//   detailsOverviewEndpoint: process.env.REACT_APP_DETAILS_OVERVIEW,
//   IncomestatementEndPoint: process.env.REACT_APP_DETAILS_INCOMESTATEMENT,
//   IntradayEndpoint: process.env.REACT_APP_DETAILS_INTRADAY,

  detailsOverviewEndpoint: UIConfig.detailsOverviewEndpoint,
  IncomestatementEndPoint: UIConfig.IncomestatementEndPoint,
  IntradayEndpoint: UIConfig.IntradayEndpoint,
};

export async function OverView(companycode) {
  try {
    const response = await axios.get(
      authConfig.detailsOverviewEndpoint.replace("{COMPANYCODE}", companycode)
    );
    if (!response.status === 200) {
      throw new Error("Request Failed failed");
    }
    return response;
  } catch (error) {
    console.error(`Error while fetaching overview data : ${error}`);
  }
}

export async function Incomestatement(companycode) {
  try {
    const response = await axios.get(
      authConfig.IncomestatementEndPoint.replace("{COMPANYCODE}", companycode)
    );
    if (!response.status === 200) {
      throw new Error("Request Failed failed");
    }
    return response;
  } catch (error) {
    console.error(`Error while fetaching overview data : ${error}`);
  }
}

export async function GetStocksData(companycode) {
  try {
    const response = await axios.get(
      authConfig.IntradayEndpoint.replace("{COMPANYCODE}", companycode)
    );
    if (!response.status === 200) {
      throw new Error("Request Failed failed");
    }
    return response;
  } catch (error) {
    console.error(`Error while fetaching overview data : ${error}`);
  }
}
