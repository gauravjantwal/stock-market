import React, { useState } from "react";
import { FormControl, Form, Button } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import * as WatchlistService from "../../services/watchlistService";

function Searchbar(props) {
  const [data, setdata] = useState(props.data);
  const[watchlistid, setWatchlistId] = useState(props.id);
  let options = props?.data;
  const newArray = options?.map(({ticker}) => ({ticker}));
  options = newArray;

  const handleAddToWatchlist = async() =>{
    const response1 =  await WatchlistService.AddBookmark(watchlistid, multiSelections[0]?.ticker);
    if(response1?.data)
    {
      setMultiSelections([]);
    }
  }

  const [multiSelections, setMultiSelections] = useState([]);
  return (
    <div className="mt-3" >
      <Form.Group className="row">
        <Typeahead className="col-10 w-100"
          id="basic-typeahead-multiple"
          labelKey="ticker"
          multiple
          onChange={setMultiSelections}
          options={options}
          placeholder="Search & Add"
          selected={multiSelections}
        />
        <button tupe="button" onClick={handleAddToWatchlist} className="col-2 btn btn-bg-color-green text-white rounded-pill border-0">Add to WatchList</button>
      </Form.Group>
    </div>
  );
}

export default Searchbar;
