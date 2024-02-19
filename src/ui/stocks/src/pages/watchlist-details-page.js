import React from 'react';
import { useParams, useLocation } from 'react-router-dom';


const WatchListDetailsPage = () => {
    const {name} = useParams();
    let location = useLocation();
      console.log(location);
    return (
        <div>
        <h3>Watch list details</h3>
        <p>{name}</p>
        </div>
    );
};
export default WatchListDetailsPage;
