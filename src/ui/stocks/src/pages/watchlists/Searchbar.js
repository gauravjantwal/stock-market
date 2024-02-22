import React, { useState , useRef} from "react";
import { FormControl, Form, Button } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import * as WatchlistService from "../../services/watchlistService";
import * as ToasterService from "../../services/toasterService";

function Searchbar(props) {
  console.log(props);
  const [data, setdata] = useState(props.data);
  const[watchlistid, setWatchlistId] = useState(props.id);
  const [multiSelections, setMultiSelections] = useState([]);

  let options = props?.data;
  const newArray = options?.map(({ticker}) => ({ticker}));
  options = newArray;
  //const typeaheadRef = useRef(null);

  const handleAddToWatchlist = async(id) =>{
    const response1 =  await WatchlistService.AddBookmark(id, multiSelections[0]?.ticker);
   // typeaheadRef.current.clear(); 
    if(response1)
    {
      ToasterService.toastSuccess("Added bookmark succesfully");
      setMultiSelections([]);
      const response = await WatchlistService.GetBookmark(id);
      props.update(response.data);
    }
  }

  return (
    <div className="mt-3" >
      <Form.Group className="row">
        <Typeahead className="col-10 w-100"
         // ref={typeaheadRef}
          id="basic-typeahead-multiple"
          labelKey="ticker"
          multiple
          onChange={setMultiSelections}
          options={options}
          placeholder="Search & Add"
          selected={multiSelections}
        />
        <button tupe="button"  onClick={(e)=>handleAddToWatchlist(props.id)} className="col-2 btn btn-bg-color-green text-white rounded-pill border-0">Add to WatchList</button>
      </Form.Group>
    </div>
  );
}

export default Searchbar;
