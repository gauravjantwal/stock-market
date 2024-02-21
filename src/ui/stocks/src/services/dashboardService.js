import axios from "axios";
//import config from "../config/config.json";

/*const authConfig = {
  DashboardNewsEndpoint: config.DashboardNewsEndpoint,
  TopGainersLosersEndPoint: config.TopGainersLosersEndPoint,
  GlobalMarketStatusEndpoint: config.GlobalMarketStatusEndpoint,
};*/

export async function DashboardNews() {
  try {
    const response = await axios.get(
      "http://localhost:8001/news/sentiments",
      { withCredentials: true });
    if (!response.status === 200) {
      throw new Error("Request Failed failed");
    }
    return response;
  } catch (error) {
    console.error(`Error while fetaching dashboard news data : ${error}`);
  }
}

export async function TopGainersLosers() {
  try {
    const response = await axios.get(
      "http://localhost:8001/top/gainers/loosers/traded",
      { withCredentials: true });
    if (!response.status === 200) {
      throw new Error("Request Failed failed");
    }
    return response;
  } catch (error) {
    console.error(`Error while fetaching TopGainersLosers data : ${error}`);
  }
}

export async function GlobalMarketStatus() {
  try {
    const response = await axios.get(
      "http://localhost:8001/globalmarket/status",
      { withCredentials: true });
    if (!response.status === 200) {
      throw new Error("Request Failed failed");
    }
    return response;
  } catch (error) {
    console.error(`Error while fetaching GlobalMarket status data : ${error}`);
  }
}