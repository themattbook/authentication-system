# Express JWT Authentication Backend
A simple authentication system built in Node Express utilizing JWT, Bcrypt, and MongoDB.

### Deployment and Testing
This application can be easily deployed to Heroku or run from terminal. A valid MongoDB installation, either local or remote must be present in order to utilize registration. A dotenv file named .env containing a variable for DB_CONNECT and PORT

### User registration
To register a user, send a POST request in JSON to the /user/register endpoint:
```JSON
{
    "username": "your_username",
    "email": "your_email",
    "password": "your_password"
}
```
Passwords are salted and hashed using bcrypt. Opening the collection in MongoDB will reveal only the salted and hashed password.

### Logging in
To login a user, send a POST request in JSON to the /user/login endpoint:
```JSON
{
    "email": "your_email",
    "password": "your_password"
}
```
You'll receive a JWT signed token if there are no errors.

### Validation
This system uses Joi to validate information on both registration and login.