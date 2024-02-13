import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import tata from "./Images/tata-logo.png";


const WatchListDetailsPage = () => {
    const {name} = useParams();
    let location = useLocation();
      console.log(location);
    return (
        <div>
        <h3>Watch list details</h3>
        </div>
    );
};
export default WatchListDetailsPage;
