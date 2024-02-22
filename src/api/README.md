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

## APIs

### 1. User Sign Up

* Path: `POST /user/signup`
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
* Path: `POST /user/signin`
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

### 3. User Sign Out
* Path: `GET /user/signout`
* Rate Limit: N/A
* Payload: N/A
* Response:
	* CODE: 204
    * CODE: 500 - Some unexpected error

### 4. Company Overview
* Path: `GET /company/:stocksymbol/overview`
* Route:
	* `:stocksymbol` - Stock symbol (IBM, MSFT.. etc)
* Format: JSON
* Response : This API returns the company information, financial ratios, and other key metrics for the equity specified

### 5. Company Income Statement
* Path: `GET /company/:stocksymbol/incomestatement`
* Route:
	* `:stocksymbol` - Stock symbol (IBM, MSFT.. etc)
* Format: JSON
* Response : This API returns the annual and quarterly income statements for the company

### 6. Company Balance Sheet
* Path: `GET /company/:stocksymbol/balancesheet`
* Route:
	* `:stocksymbol` - Stock symbol (IBM, MSFT.. etc)
* Format: JSON
* Response : This API returns the annual and quarterly balance sheets for the company of interest

### 7. Company News and Sentiments
* Path: `GET /company/:stocksymbol/news/sentiments`
* Route:
	* `:stocksymbol` - Stock symbol (IBM, MSFT.. etc)
* Format: JSON
* Response:
  	* CODE: 200
	```
	{
		"feed": [
			{
				"title": "AI Revolution Reshapes IT Job Market",
				"url": "https://www.benzinga.com/pressreleases/24/02/g37199001/ai-revolution-reshapes-it-job-market-and-hiring-trends-it-labor-market-and-talent-benchmarking-rep",
				"time_published": "20240219T120821" 
				"authors": [
					"Globe Newswire",
					...
				],
				"summary": "Houghton, Feb. 19, 2024 ( GLOBE NEWSWIRE ) -- Introduction: In the wake of...",
				"banner_image": "https://www.benzinga.com/next-assets/images/schema-image-default.png",
				"source": "Benzinga",
				"category_within_source": "General",
				"source_domain": "www.benzinga.com",
				"topics": [
					{
						"topic": "Retail & Wholesale"
					},
					{
						"topic": "Financial Markets"
					}
					....
				],
				"ticker_sentiment": [
					{
						"ticker": "INFY"
					},
					{
						"ticker": "WIT"
					}
					...
				]
			}
			.....
			...
		]
	}
	```
  	* CODE: 400 - Bad request
  	* CODE: 500 - Some unexpected error

### 8. Ticker Search
* Path: `GET /ticker/:stocksymbol/search`
* Route:
	* `:stocksymbol` - Stock symbol (IBM, MSFT.. etc)
* Format: JSON
* Response : This API returns the best-matching symbols and market information based on keywords of your choice

### 9. Timeseries IntraDay
* Path: `GET /timeseries/:stocksymbol/intraday`
* Route:
	* `:stocksymbol` - Stock symbol (IBM, MSFT.. etc)
* Format: JSON
* Response : This API returns current and 20+ years of historical intraday OHLCV time series of the equity

### 10. Time Series Daily
* Path: `GET /timeseries/:stocksymbol/daily`
* Route:
	* `:stocksymbol` - Stock symbol (IBM, MSFT.. etc)
* Format: JSON
* Response : This API returns All Daily Prices (open, high, low, close) and Volumes

### 11. IntraDay stocks updates
* Path: `GET /intraday/:stocksymbols/updates`
* Route:
	* `:stocksymbol` - Stock symbol (IBM, MSFT.. etc)
* Rate Limit: N/A
* Route:
    * `:stocksymbols`: one or more stock symbol separated by comma `,`.
	
		e.g.
			
			1. `/intraday/IBM/updates`
			2. `/intraday/IBM,MSFT/updates`
* Response:
	* CODE: 200 - JSON
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
			}
	  	}
      ```
 	* CODE: 400 - Bad Request (with message)
  	* CODE: 500 - Some unexpected error

### 12. Global Market Status
* Path: `GET /globalmarket/status`
* Format: JSON
* Response : This endpoint returns the current market status (open vs. closed) of major trading venues for equities, forex, and cryptocurrencies around the world.

### 13. News and Sentiments
* Path: `GET /news/sentiments`
* Format: JSON
* Response : This API returns live and historical market news & sentiment data

### 14. Top Gainers And Loosers
* Path: `GET /top/gainers/loosers/traded`
* Format: JSON
* Response : This endpoint returns the top 20 gainers, losers, and the most active traded tickers in the US market.

### 15. Get all watchlist
* Path: `GET /watchlist`
* Rate Limit: 5 requests in 15 mins
* Payload: N/A
* Response:
	* CODE: 200 - User created
 		```
  		[
			{
				"_id_": "65d59896e6fdb9670764f4d6",
				"name": "To invest list"
			},
			...
		]
   		```
  	* CODE: 401 - Unauthorize error
  	* CODE: 500 - Some unexpected error
	
### 16. Get a watchlist
* Path: `GET /watchlist/:id`
* Rate Limit: N/A
* Route:
	* `:id` - Watchlist Id
* Payload: N/A
* Response:
	* CODE: 200 - User created
 		```
  		[
			{
				"_id_": "65d59896e6fdb9670764f4d6",
				"name": "To invest list"
			},
			...
			...
		]
   		```
  	* CODE: 400 - Bad request
  	* CODE: 401 - Unauthorize error
  	* CODE: 404 - Not found
  	* CODE: 500 - Some unexpected error

### 17. Create a watchlist
* Path: `POST /watchlist`
* Rate Limit: 5 requests in 15 mins
* Payload:
	```
	{
		"name": "Intraday watch list",
	}
	```
* Response:
  	* CODE: 201 - Created
  	* CODE: 400 - Bad request
  	* CODE: 401 - Unauthorize error
  	* CODE: 500 - Some unexpected error

### 18. Update watchlist name
* Path: `PUT /watchlist/:id`
* Rate Limit: 5 requests in 15 mins
* Route:
	* `:id` - Watchlist Id
* Payload:
	```
	{
		"name": "Intraday watch-list",
	}
	```
* Response:
  	* CODE: 202 - Accepted
  	* CODE: 400 - Bad request
  	* CODE: 401 - Unauthorize error
  	* CODE: 404 - Not found
  	* CODE: 500 - Some unexpected error
	
### 19. Delete a watchlist
* Path: `DELETE /watchlist/:id`
* Rate Limit: 5 requests in 15 mins
* Route:
	* `:id` - Watchlist Id
* Payload: N/A
* Response:
  	* CODE: 202 - Accepted
  	* CODE: 400 - Bad request
  	* CODE: 401 - Unauthorize error
  	* CODE: 404 - Not found
  	* CODE: 500 - Some unexpected error

### 20. Get all bookmarks in a watchlist
* Path: `GET /watchlist/:id/bookmark`
* Rate Limit: N/A
* Route:
	* `:id` - Watchlist Id
* Payload: N/A
* Response:
	* CODE: 200 - User created
 		```
  		[
			"IBM",
			"MSFT"
			..
		]
   		```
  	* CODE: 400 - Bad request
  	* CODE: 401 - Unauthorize error
  	* CODE: 404 - Not found
  	* CODE: 500 - Some unexpected error

### 21. Create a bookmark in a watchlist
* Path: `POST /watchlist/:id/bookmark`
* Rate Limit: 5 requests in 15 mins
* Route:
	* `:id` - Watchlist Id
* Payload:
	```
	{
		"stocksymbol": "GOOGLE"
	}
	```
* Response:
	* CODE: 201 - Bookmark created
  	* CODE: 400 - Bad request
  	* CODE: 401 - Unauthorize error
  	* CODE: 500 - Some unexpected error

### 22. Delete a bookmark from a watchlist
* Path: `DELETE /watchlist/:id/bookmark/:stocksymbol`
* Rate Limit: 5 requests in 15 mins
* Route:
	* `:id` - Watchlist Id
	* `:stocksymbol` - Stock symbol (IBM, MSFT.. etc)
* Payload: N/A
* Response:
	* CODE: 202 - Accepted
  	* CODE: 400 - Bad request
  	* CODE: 401 - Unauthorize error
  	* CODE: 500 - Some unexpected error
