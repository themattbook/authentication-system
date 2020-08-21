# Express JWT Authentication Backend
A simple authentication system built in Node Express utilizing JWT, Bcrypt, and MongoDB.

### Deployment and Testing
This application can be easily deployed to Heroku or run from terminal. A valid MongoDB installation, either local or remote must be present in order to utilize registration. A dotenv file named .env containing a variable for DB_CONNECT and PORT

### User registration
To register a user, send a POST request in JSON to the /user/register endpoint:
```JSON
{
    "username": your_username,
    "email": your_email,
    "password": your_password
}
```
