import React, { useState , useEffect} from "react";
import Searchbar from "./Searchbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import * as WatchlistService from "../../services/watchlistService";
import * as DashboardService from "../../services/dashboardService";
import * as ToasterService from "../../services/toasterService";

function Allwatchlist() {
  const [topgainersdata, settopgainersdata] = useState(null);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [watchlist, setwatchlist] = useState(null);
  const [watchlistid, setWatchlistId] = useState("");
  const[bookmark, setBookmark] = useState([]);

  useEffect(() => {
    let getwatchlists = null;
    let topGainersLosers = null;
     const fetchData = async () => {
       const response1 = await WatchlistService.GetWatchlist();
       getwatchlists = response1?.data;
       if(response1?.data)
       {
        setwatchlist(getwatchlists);
        if(watchlistid == "")
        {
          setWatchlistId(getwatchlists[0]?._id);
        }
       }

      const GainersLosers = await DashboardService.TopGainersLosers();
      topGainersLosers = GainersLosers?.data;
      if(GainersLosers?.data)
      {
        settopgainersdata(topGainersLosers?.top_gainers);
      }  
      
      const response =  await WatchlistService.GetBookmark(getwatchlists[0]?._id);
        if(response?.data)
        {
          let result = topgainersdata?.filter(o1 => response?.data.some(o2 => o1.ticker === o2));
          settopgainersdata(topGainersLosers?.top_gainers);
          setBookmark(result);
        }
     };

     fetchData();
   }, []);

   const updateWatchlist=(data)=>{
     console.log("test" +data);
    let result = topgainersdata?.filter(o1 => data.some(o2 => o1.ticker === o2));
    setBookmark(result); 
   }

  const handleClose = () => {
    setShow(false);
    setName('');
  }

  const handleSave =async () => {
   const response =  await WatchlistService.AddWatchlist(name);
   if(response)
   {
    setShow(false);
    setName('');
    ToasterService.toastSuccess("Added watchlist succesfully");
   }
  const response1 = await WatchlistService.GetWatchlist();
  setwatchlist(response1?.data);
  }

  const handleWatchlist = async(id) =>{
    setWatchlistId(id);
    const response =  await WatchlistService.GetBookmark(id);
    let result = topgainersdata?.filter(o1 => response?.data.some(o2 => o1.ticker === o2));
    setBookmark(result);
  }
  const handleDelete = async(stocksymbol) => 
  {
    const response =  await WatchlistService.DeleteBookmark(watchlistid, stocksymbol);
    const response1 =  await WatchlistService.GetBookmark(watchlistid);
    let result = topgainersdata?.filter(o1 => response1?.data.some(o2 => o1.ticker === o2));
    setBookmark(result);
    ToasterService.toastSuccess("Deleted bookmark succesfully");
  }

  return (
    <>
      <div className="conatiner">
        <div className="w-100 clearfix">
          <h3 className="ml-2 float-left section-title">All Watchlists</h3>
          <button
            className="float-right btn btn-bg-color-green text-white fw-bold"
            type="button"
            onClick={()=>setShow(true)} >
            Add WatchList
          </button>
        </div>

        <div>
          {watchlist?.length > 0 ? (
            <>
              <div className="mt-3">
                {watchlist?.map((element) => (
                  <button key={element?._id}
                    type="button"
                    className="btn btn-light text-color-green rounded-pill fw-bold ml-2 shadow "
                    onClick={(e) => handleWatchlist(element?._id)}>
                    {element?.name}
                  </button>
                ))}
              </div>
              <div>
                <Searchbar data={topgainersdata} id={watchlistid} 
                update={updateWatchlist}></Searchbar>
              </div>
              <div className="mt-2 border rounded">
                <table className="table table-hover ">
                  <thead>
                    <tr>
                      <th className="section-title">Company</th>
                      <th className="section-title">Price</th>
                      <th className="section-title">change Percentage</th>
                      <th className="section-title">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {bookmark?.map((row) => (
              <tr key={row.ticker} >
                <td>{row.ticker}</td>
                <td>{row.price}</td>
                <td>{row.change_percentage}</td>
                <td><button onClick={()=> handleDelete(row.ticker)} className="btn btn-light text-color-green rounded-pill shadow fw-bold">
                          Delete
                        </button>
                </td>
              </tr>
            ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <p> No watch list data availble</p>
          )}
        </div>
        <div>
        <Modal show={show} onHide={handleClose} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title className="section-title">Add WatchList</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="section-title">WatchList Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter WatchList Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className="btn text-white" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" className="btn btn-bg-color-green text-white" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
      </div>
    </>
  );
}

export default Allwatchlist;
