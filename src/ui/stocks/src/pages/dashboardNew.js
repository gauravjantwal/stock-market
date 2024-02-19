import {React, useEffect, useState} from "react";
import axios from "axios";
import * as DashboardService from "../services/dashboardService";
import { Card, Row, Col } from "react-bootstrap";
import jfs from "./Images/jfs.svg";

const DashboardNew = () => {
    const [post, setData] = useState([]);

    useEffect(() => {
        let dashboardNews = null;
        let topGainersLosers = null;
       // let globalMarketStatus = null;
        
        const fetchData = async () => {
            const dashboard=  await DashboardService.DashboardNews();
            dashboardNews = dashboard.data;
            console.log(dashboardNews);
    
            const GainersLosers =  await DashboardService.TopGainersLosers();
            topGainersLosers = GainersLosers.data;
            console.log(topGainersLosers);
    
            /*const globalMarket =  await DashboardService.GlobalMarketStatus();
            globalMarketStatus = globalMarket.data;
            console.log(globalMarketStatus);*/

          setData({
            DashboardNews: dashboardNews,
            TopGainersLosers: topGainersLosers,
           // GlobalMarketStatus: globalMarketStatus,
          });
        }; 

        fetchData();
        console.log(post);   
      }, []);

    
    /*useEffect(() => {
        debugger;
        axios.get("http://localhost:8001/top/gainers/loosers/traded").then((data) => {
          debugger;
          console.log(data);
          console.log(response);
        });
      }, []); */
      return(
    <div>      
      <h3>DashboardNew</h3>  
    </div>
      );
}

export default DashboardNew