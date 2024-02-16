import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Fundamentals = () => {
    const {name} = useParams();
    let location = useLocation();
      console.log(location);
    return (
        <div>
        <h5>Fundamentals</h5>
        <table className="table table-striped" border="no-border">
            <tbody>
                <tr>
                    <td>Market Cap</td> 
                    <td>65,500</td>
                    <td>ROE</td>
                    <td>9.95%</td>
                </tr>
                <tr>
                    <td>Market Cap</td> 
                    <td>65,500</td>
                    <td>ROE</td>
                    <td>9.95%</td>
                </tr>
                <tr>
                    <td>Market Cap</td> 
                    <td>65,500</td>
                    <td>ROE</td>
                    <td>9.95%</td>
                </tr>
            </tbody>
        </table>
        </div>
    );
};
export default Fundamentals;