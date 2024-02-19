# Stock Market nodejs APIs

## Project Setup
Prerequisities
	1. Node.js
	2. MongoDB

Use following commands to setup nodejs project:
	1. Navigate to `src/api` directory.
	2. Run `npm i` to install all the dependencies.
	3. Run `npm start` to run the application
		* Configuration: config.json
		* 

## APIs

### 1. User Sign Up

* Path: `/user/signup`
* Rate Limit: 5 requests in 15 mins
* Payload:
	
	```
	{
		"name": "Gaurav J",
		"email": "gauravj@domain.com",
		"password": "123456773"
	}
	```
* Response:
	* CODE: 201 - User created
 	* CODE: 400 - Bad Request (with message)
 	* CODE: 409 - Conflict (with message)
	* CODE: 429 - Too Many Requests
  	* CODE: 500 - Some unexpected error

### 2. User Sign In
* Path: `/user/signin`
* Rate Limit: 5 requests in 15 mins
* Payload:
	```
	{
		"email": "gauravj@domain.com",
		"password": "123456773"
	}
	```
* Response:
	* CODE: 200
 		```
  		{
			"user": {
				"name": "Gaurav J",
				"email": "gauravj@domain.com"
			}
		}
   		```
   	* CODE: 401 - Authorization Error (with message)
	* CODE: 429 - Too Many Requests
    * CODE: 500 - Some unexpected error


### 3. Time Series Daily
* Path: `/timeseries/IBM/daily`
* Format: JSON
* Response : This API returns All Daily Prices (open, high, low, close) and Volumes

### 4. Balance Sheet
* Path: `/company/IBM/balancesheet`
* Format: JSON
* Response : This API returns the annual and quarterly balance sheets for the company of interest

### 5. Company Overview
* Path: `/company/IBM/overview`
* Format: JSON
* Response : This API returns the company information, financial ratios, and other key metrics for the equity specified

### 6. Income Statement
* Path: `/company/IBM/incomestatement`
* Format: JSON
* Response : This API returns the annual and quarterly income statements for the company

### 7. Global Market Status
* Path: `/globalmarket/status`
* Format: JSON
* Response : This endpoint returns the current market status (open vs. closed) of major trading venues for equities, forex, and cryptocurrencies around the world.

### 8. News and Sentiments
* Path: `/news/sentiments`
* Format: JSON
* Response : This API returns live and historical market news & sentiment data

### 9. Ticker Search
* Path: `/ticker/IBM/search`
* Format: JSON
* Response : This API returns the best-matching symbols and market information based on keywords of your choice

### 10. Timeseries IntraDay
* Path: `/timeseries/:stocksymbol/intraday`
* Format: JSON
* Response : This API returns current and 20+ years of historical intraday OHLCV time series of the equity

### 11. IntraDay stocks Updates
* Path: `/intraday/:stocksymbols/updates`
    * `:stocksymbols`: one or more stock symbol separated by comma `,`, e.g. `/intraday/IBM/updates` or `/intraday/IBM,MSFT/updates`
* Format: JSON
* Response : This API returns the latest update on the stock
    * JSON:
      ```
      {
         {
	  "symbol": "IBM",
	  "data": {
	    "Time Series (1min)": {
	      "2024-02-15 19:55:00": {
	        "1. open": "186.6700",
	        "2. high": "187.0000",
	        "3. low": "186.6600",
	        "4. close": "187.0000",
	        "5. volume": "140"
	      }
         }
      }
      ```

### 12. Top Gainers And Loosers
* Path: `/top/gainers/loosers/traded`
* Format: JSON
* Response : This endpoint returns the top 20 gainers, losers, and the most active traded tickers in the US market.
