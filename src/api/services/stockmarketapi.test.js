const { getCompanyOverview } = require("../controllers/companyoverviewcontroller");

const { getNewsAndSentimentForSymbol } = require("../controllers/newsandsentimentscontroller");

const { getDailyTimeSeries,
  getIntradayTimeSeries,
  getIntradayStocksUpdate } = require("../controllers/timeseriescontroller");

const { getTopGainerLooserAndTraded } = require("../controllers/topgainerandloosercontroller");

const { getTickerSearch } = require("../controllers/tickersearchcontroller");

const { getCompanyBalancesheet } = require("../controllers/balancesheetcontroller");

//mocking the controller
jest.mock('../controllers/companyoverviewcontroller');
jest.mock('../controllers/newsandsentimentscontroller');
jest.mock('../controllers/timeseriescontroller');
jest.mock('../controllers/topgainerandloosercontroller');
jest.mock('../controllers/tickersearchcontroller');
jest.mock('../controllers/balancesheetcontroller');



//Testcase for companyoverviewcontroller
describe("companyoverviewcontroller", () => {
    it("should show up the company overview", async () => {
  
      // Mocking request and response objects
      const req = { params: { symbol: "IBM" }};
     
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      };
  
      // Calling the function
      await getCompanyOverview(req, res);
  
      // Assertions
      expect(getCompanyOverview).toHaveBeenCalled();
  
    });
  
  });

  //Testcase for newsandsentimentscontroller
describe("newsandsentimentscontroller", () => {
    it("should show up the company overview", async () => {
  
      // Mocking request and response objects
      const req = { params: { symbol: "IBM" }};
     
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      };
  
      // Calling the function
      await getNewsAndSentimentForSymbol(req, res);
  
      // Assertions
      expect(getNewsAndSentimentForSymbol).toHaveBeenCalled();
  
    });
  
  });

  //Testcase for timeseriescontroller
describe("timeseriescontroller", () => {
  it("should show up the timeseriescontroller", async () => {

    // Mocking request and response objects
    const req = { params: { symbol: "IBM" }};
   
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };

    // Calling the function
    await getDailyTimeSeries(req, res);

    // Assertions
    expect(getDailyTimeSeries).toHaveBeenCalled();

  });

});

 //Testcase for timeseriescontroller
describe("timeseriescontroller", () => {
  it("should show up the timeseriescontroller", async () => {

    // Mocking request and response objects
    const req = { params: { symbol: "IBM" }};
   
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };

    // Calling the function
    await getIntradayTimeSeries(req, res);

    // Assertions
    expect(getIntradayTimeSeries).toHaveBeenCalled();

  });

});

//Testcase for timeseriescontroller
 describe("timeseriescontroller", () => {
   it("should show up the timeseriescontroller", async () => {

     // Mocking request and response objects
     const req = { params: { symbol: "IBM" }};
   
     const res = {
       status: jest.fn().mockReturnThis(),
       json: jest.fn(),
       send: jest.fn(),
     };

     // Calling the function
     await getIntradayStocksUpdate(req, res);

     // Assertions
     expect(getIntradayStocksUpdate).toHaveBeenCalled();

   });

 });

//Testcase for getTopGainerLooserAndTraded
describe("getTopGainerLooserAndTraded", () => {
  it("should show up the topgainerandloosercontroller", async () => {

    // Mocking request and response objects
    const req = { params: { symbol: "IBM" }};
   
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };

    // Calling the function
    await getTopGainerLooserAndTraded(req, res);

    // Assertions
    expect(getTopGainerLooserAndTraded).toHaveBeenCalled();

  });

});

//Testcase for topgainerandloosercontroller
describe("topgainerandloosercontroller", () => {
  it("should show up the tickersearchcontroller", async () => {

    // Mocking request and response objects
    const req = { params: { symbol: "IBM" }};
   
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };

    // Calling the function
    await getTickerSearch(req, res);

    // Assertions
    expect(getTickerSearch).toHaveBeenCalled();

  });

});

//Testcase for balancesheetcontroller
describe("balancesheetcontroller", () => {
   it("should show up the balancesheetcontroller", async () => {

     // Mocking request and response objects
     const req = { params: { symbol: "IBM" }};
   
     const res = {
       status: jest.fn().mockReturnThis(),
       json: jest.fn(),
       send: jest.fn(),
     };

     // Calling the function
     await getCompanyBalancesheet(req, res);

     // Assertions
     expect(getCompanyBalancesheet).toHaveBeenCalled();

   });

 });

