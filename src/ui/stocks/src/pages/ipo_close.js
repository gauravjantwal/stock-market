import React from 'react';
import './ipo.css';

const Ipo_Close = ({ data }) => {
  return (
    <table className='table_class'>
      <thead>
        <tr>
          <th className='table_th_td'>Companies</th>
          <th className='table_th_td'>Listing</th>
          <th className='table_th_td'>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td className='table_th_td'>{row.companies}</td>
            <td className='table_th_td'>{row.listing}</td>
            <td className='table_th_td'>{row.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Ipo_Close;
