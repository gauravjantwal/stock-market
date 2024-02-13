# Stock Market nodejs APIs


## API

### User Sign Up
PATH:
    `/user/signup`
PAYLOAD:
    `
    {
        "name": "Gaurav J",
        "email": "gauravj@emids.com",
        "password": "123456773"
    }
    `
RESPONSE:
		CODE: 201 - User created
		CODE: 400 - Bad Request (with message)
		CODE: 500 - Some unexpected error

### User Sign In
PATH: /user/signin
PAYLOAD:
{
	"email": "gauravj@emids.com",
	"password": "123456773"
}
RESPONSE:
		CODE: 200
			{
				"user": {
					"name": "Gaurav J",
					"email": "gauravj@emids.com"
				}
			}
		CODE: 401 - Authorization Error (with message)
		CODE: 500 - Some unexpected error