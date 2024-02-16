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
* Path: `/timeseriesdaily/IBM`
* Format: JSON
* Response : Get All Daily Prices (open, high, low, close) and Volumes

### 4. Balance Sheet
* Path: `/balancesheet/IBM`
* Format: JSON
* Response : Get AnnualReports