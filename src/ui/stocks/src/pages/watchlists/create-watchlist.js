import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as WatchlistService from "../../services/watchlistService";


const CreateWatchlist = () => {
    debugger;
    const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const status = await WatchlistService.AddWatchlist(name);
      if (status) {
     /*   setError({
          hasError: false,
          code: 0,
          message: "",
        });
        navigate("/");*/
        return true;
      } 
      // Optionally, redirect or show a success message
    } catch (error) {
      console.error("Error creating watchlist:", error);
    }
  };
  return (
    <>
    <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      <div className="main container watchlist">
        <h5 className="text-center text-color-green">Create Watchlist</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              for="watchlistname"
              className="form-label gray-text-color"
            >
              Watchlist Name
            </label>
            <input
              type="text"
              className="form-control"
              id="watchlistname"
              placeholder="Enter Watchlist name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn bg-color-green text-white">
              Create
            </button>
          </div>
        </form>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default CreateWatchlist;
