import axios from "axios";
import config from "../config/config.json";

const configuration = {
    addwatchlist: config.Create_Watchlist,
    getwatchlist: config.Get_Watchlist,
    getBookmark: config.Get_Bookmark,
    addBookmark: config.Create_Bookmark
    // Add any other configuration properties you need
  };

  async function AddWatchlist(name) {
    try {
      const response = await fetch(configuration.addwatchlist, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
  
      if (!response.ok) {
        throw new Error('Watchlist creation failed');
      }
      return true;
    } catch (error) {
      console.error(`Error in creating watchlist: ${error}`);
    }   
  }

  async function AddBookmark(symbol) {
    try {
      const response = await fetch(configuration.addBookmark, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symbol }),
      });
  
      if (!response.ok) {
        throw new Error('Watchlist creation failed');
      }
      return true;
    } catch (error) {
      console.error(`Error in creating watchlist: ${error}`);
    }   
  }

  async function GetWatchlist() {
    try {
      const response = await fetch(configuration.getwatchlist);
  
      if (!response.ok) {
        throw new Error('Get Watchlist failed');
      }
      return true;
    } catch (error) {
      console.error(`Error in getting watchlist: ${error}`);
    } 
  }

  async function GetBookmark() {
    try {
      const response = await fetch(configuration.getBookmark);
  
      if (!response.ok) {
        throw new Error('Get bookmark failed');
      }
      return true;
    } catch (error) {
      console.error(`Error in getting bookmark: ${error}`);
    }  
  }
export  { AddWatchlist };

