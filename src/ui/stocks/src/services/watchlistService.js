import axios from "axios";
import config from "../config/config.json";

const configuration = {
    addwatchlist: config.Create_Watchlist,
    getwatchlist: config.Get_Watchlist,
    // Add any other configuration properties you need
  };

  async function AddWatchlist(name) {
    try {
      const response = await axios({
        url: configuration.addwatchlist,
        method: 'POST',
        data: { name },
        withCredentials: true
      });
     /* const response = await axios.post(configuration.addwatchlist, {
        method: 'POST',
        withCredentials :true,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });*/
  
      if (response.status != 201) {
        throw new Error('Watchlist creation failed');
      }
      return true;
    } catch (error) {
      console.error(`Error in creating watchlist: ${error}`);
    }   
  }

  async function GetWatchlist() {
    try {
      const response = await axios({
        url: configuration.getwatchlist,
        method: 'GET',
        withCredentials: true
      });
  
      if (response.status != 200) {
        throw new Error('Get Watchlist failed');
      }
      return response;
    } catch (error) {
      console.error(`Error in getting watchlist: ${error}`);
    } 
  }

  async function AddBookmark(watchlistid, stocksymbol) {
    try {
      const response = await  axios({
        url: configuration.addwatchlist + "/" + watchlistid + "/bookmark",
        method: 'POST',
        data: { stocksymbol },
        withCredentials: true
      });
  
      if (response.status != 200) {
        throw new Error('Watchlist creation failed');
      }
      return true;
    } catch (error) {
      console.error(`Error in creating watchlist: ${error}`);
    }   
  }

  async function GetBookmark(watchlistid) {
    try {
      const response = await axios({
        url: configuration.getwatchlist + "/" + watchlistid + "/bookmark",
        method: 'GET',
        withCredentials: true
      });
  
      if (response.status != 200) {
        throw new Error('Get bookmark failed');
      }
      return response;
    } catch (error) {
      console.error(`Error in getting bookmark: ${error}`);
    }  
  }

  async function DeleteBookmark(watchlistid, stocksymbol)
  {
     try{
        const response = await axios({
            url: configuration.getwatchlist + "/" + watchlistid + "/bookmark/" +stocksymbol,
            method: 'DELETE',
            withCredentials: true
          });
      
          if (response.status != 200) {
            throw new Error('Delete bookmark failed');
          }
          return true;
        } catch (error) {
          console.error(`Error in deleting bookmark: ${error}`);
        }   
  }

export  { AddWatchlist, GetWatchlist, AddBookmark, GetBookmark, DeleteBookmark };

