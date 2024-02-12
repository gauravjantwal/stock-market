import React from 'react'
import './ipo.css';
import Ipo_Open from './ipo_open';
import Ipo_Close from './ipo_close';
import Ipo_Upcoming from './ipo_upcoming';

const IPO = () => {
    const tableDataOpen = [
        { companies: 'Entero Healthcare Solutions', closesOn: '13th Feb, 4:50PM', priceRange: '$1195-$1258' },
      ];
    const tableDataClosed = [
        { companies: 'Apeejay Surrendra Park Hotels', listing: '12 Feb', status: 'Listing on 12 Feb at 10Am'},
        { companies: 'Rashi Peripherals', listing: '14 Feb', status: 'Listing on 14 Feb at 10Am'},
        { companies: 'Capital Small Finance Bank', listing: '12 Feb', status: 'Listing on 12 Feb at 10Am'},
        { companies: 'Jana Small Finance Bank', listing: '12 Feb', status: 'Listing on 12 Feb at 10Am'}
    ]
    const tableDataUpcoming = [
        {companies: 'Vibhor Steel Tubes', bidStart: '13th Feb, 10:00AM', priceRange: '$141-$151'}
    ]
    return(
        <div>
            <h2 className='ipo_header2'>IPO - Initial Public Offerings</h2>
            <h3 className='ipo_header3'>Open</h3> 
            <Ipo_Open data={tableDataOpen} />
            <h3 className='ipo_header3'>Closed</h3>
            <Ipo_Close data={tableDataClosed} />  
            <h3 className='ipo_header3'>Upcoming</h3>
            <Ipo_Upcoming data={tableDataUpcoming} />  
        </div>
    );
}

export default IPO;