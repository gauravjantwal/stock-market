import React from 'react';
import './ipo.css';

const Ipo_Upcoming = ({ data }) => {
  return (
    <table className='table_class'>
      <thead>
        <tr>
          <th className='table_th_td'>Companies</th>
          <th className='table_th_td'>Bid Starts</th>
          <th className='table_th_td'>Price Range</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td className='table_th_td'>{row.companies}</td>
            <td className='table_th_td'>{row.bidStart}</td>
            <td className='table_th_td'>{row.priceRange}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Ipo_Upcoming;
