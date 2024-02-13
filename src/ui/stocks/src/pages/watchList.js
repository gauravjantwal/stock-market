import React, { useState } from 'react';
import ViewWatchList from './view-watchlist';
import { useNavigate, NavLink } from 'react-router-dom';

const WatchList = () => {
  // Define some sample table data
  const tableData = [
    { id: 1, companyName: 'TataMotors', marketPrice: 3000, dayChange : -345 },
    { id: 2, companyName: 'Maruti Suzuki', marketPrice: 2000, dayChange : -347 },
    { id: 3, companyName: 'Volkswagan', marketPrice: 1000, dayChange : -678 },
  ];

  // State to manage whether to show the second table or not
  const [showTable, setShowTable] = useState(false);
  // State to hold the data of the clicked row
  const [clickedRowData, setClickedRowData] = useState(null);

  const history = useNavigate();

  // Event handler to handle row click
  const handleRowClick = (rowData) => {
    setShowTable(true);
    setClickedRowData(rowData);
  };
  // Event handler to handle row click
  const handleNameClick = (rowData) => {
   // history(`/watchlist-details-page/${rowData.id}`);
  };

  return (
    <div>
        <h3>All Watchlists</h3><br></br>
        <div className="row">
        <div className="col-6 col-md-6 float-left">
        <form className="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>CompanyName <i class="fa-solid fa-caret-down"></i></th>
              <th>MarketPrice</th>
              <th>DayChange</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id} onClick={() => handleRowClick(row)}>
                <td> <NavLink to={`/details/${row.id}`} >{row.id}</NavLink></td>
                <td><NavLink to={`/details/${row.companyName}`} >{row.companyName}</NavLink></td>
                <td>{row.marketPrice}</td>
                <td>{row.dayChange}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <div className="col-6 col-md-6 float-left">{showTable && <ViewWatchList rowData={clickedRowData} />}
        </div>
    </div>
    </div>
  );
};

export default WatchList;