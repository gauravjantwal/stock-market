import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Fundamentals = () => {
    const {name} = useParams();
    let location = useLocation();
      console.log(location);
    return (
        <div>
        <h3>Fundamentals</h3>
        </div>
    );
};
export default Fundamentals;