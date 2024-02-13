# Stock Market nodejs APIs


## APIs

### 1. User Sign Up

* Path:
	```/user/signup```
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
  	* CODE: 500 - Some unexpected error

### 2. User Sign In
* Path: `/user/signin`
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
    * CODE: 500 - Some unexpected error
