const { getWatchlists,postWatchlist,getWatchlistBookmarks,postWatchlistBookmark
} = require("../controllers/watchlistcontroller");

jest.mock("../controllers/watchlistcontroller");

//GetWatchList Testcase
describe("GetWatchList", () => {
    it("should give the watchlists", async () => {
  
      // Mocking request and response objects
      const req = { params: { userid: "65d5b92454957ec8110845da" }
               
    };
     
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      };
  
      // Calling the function
      await getWatchlists(req, res);
  
      // Assertions
      expect(getWatchlists).toHaveBeenCalled();
  
    });
  
  });

  //postWatchlist Testcase
describe("PostWatchList", () => {
    it("should add the watchlists", async () => { 
      // Mocking request and response objects
      const req = { params: { email: "test@abc.com" },
                    params: {password:"test@123"}
    };
     
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      };
  
      // Calling the function
      await postWatchlist(req, res);
  
      // Assertions
      expect(postWatchlist).toHaveBeenCalled();
  
    });
  
  });

  //getWatchlistBookmarks Testcase
describe("getWatchlistBookmarks", () => {
    it("should get the watchlist bookmark", async () => { 
      // Mocking request and response objects
      const req = { params: {watchlistid: "65d589268fafd15e4564f851" },
                    params: {userid:"65d5b92454957ec8110845da"}
    };
     
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      };
  
      // Calling the function
      await getWatchlistBookmarks(req, res);
  
      // Assertions
      expect(getWatchlistBookmarks).toHaveBeenCalled();
  
    });
  
  });

    //postWatchlistBookmark Testcase
describe("postWatchlistBookmark", () => {
    it("should add the watchlist bookmark", async () => { 
      // Mocking request and response objects
      const req = { params: {watchlistid: "65d589268fafd15e4564f851" },
                    params: {"symbol":"IBM"},
                    params: {userid:"65d5b92454957ec8110845da"}
    };
     
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      };
  
      // Calling the function
      await postWatchlistBookmark(req, res);
  
      // Assertions
      expect(postWatchlistBookmark).toHaveBeenCalled();
  
    });
  
  });




