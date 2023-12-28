# Question 1: User Management Backend with Express and MongoDB

### Objective:

Design and develop a user management backend system using Express.js and MongoDB, allowing users to
create, login account

### Requirements:

1. Implement a RESTful API using Expressjs for handling user-related operations.
2. Utilise MongoDB as the database for storing user information.
3. Include functionality for user registration, User Login.
4. Ensure proper validation and error handling throughout the application.
5. Develop clear and well-structured code with appropriate comments.
6. Provide API documentation, including endpoints, request/response formats, and error handling.

### Review and submit:

1. Review your code, ensuring it follows best practices and is well-structured.
2. Double-check the functionality, error handling, and documentation.
3. Upload Your Code on GitHub with the API documentation (readme).

Note: You can make use of additional npm packages or libraries based on your requirements to enhance the functionality and security of your application.

### File Structure :

The backend system is created with different files and folders:

1. The "config" folder contains the "db.js" file. The file is created here to connect the backend with the mongoDB database (contains the function "connectDB"),

2. The "controllers" folder contains the "userControllers.js" file which contains the functions to register and login users,

3. The "models" folder contains the "userModel.js" file which contains the type definitions of the variables and methods to be in the "User" model in mongoDB,

4. The "routes" folder contains the "userRoutes.js" file which contains the api endpoints for the users to register and login (both are POST methods)

### API Documentation:

- All the api endpoints are defined in the "userRoutes.js" file inside the "routes" folder.

In the "userRoutes.js" file:

1. the "Router" method is imported as "userRoutes" from the "express",
2. the controllers functions : "registerUser" & "loginUser" are imported from the "userControllers.js" file inside the "controllers" folder,
3. api requests for specific endpoints and their request handler function added and lastly, the "userRoutes" "Router" instance exported to be accessible from everywhere in the backend.

- All the api request handler functions are defined in the "userControllers.js" file inside the "controllers" folder.

In the "userControllers.js" file:

1. The "User" model of our dataBase is imported from the "userModel.js" file where the "User" model is defined ,
2. At first, the function to handle the "POST" request at "/register" endpoint is created.

The functionalities in the "registerUser" function are :

i. This is made an asynchronous function to resolve the promise of creating an user instance of "User" model in the DB.

ii. Before creating an user instance or before registering an user, it checks two things first:

a. If the request body includes all the values (name,email and password). If any of the values is not in the request body, it will not create an user and throw a new Error.

b. If an user instance with the same email exists in the DB, another user with the same email will not be created and it will throw a new Error.

iii. If the user instance is created, a success response with a statusCode and a json object of user details (not the password) will be sent and a message of "User Registered Successfully!".
else, a new Error will be thrown.

And, in the catch block, if any of these errors occur, it will send the status code of 500 and send the respective error message as a message.

4. At first, the function to handle the "POST" request at "/register" endpoint is created.

The functionalities in the "loginUser" function are :

i. This is made an asynchronous function to resolve the promise of finding an user instance of "User" model (in the DB),with the same email and match the entered password with the actual password with the matchPassword method defined in the "User" model.

ii. Before logging in an user, it checks two things first:

a. If the request body includes all the values (email and password). If any of the values is not in the request body, it will not log in the user and throw a new Error.

b. If an user instance with the same email exists in the DB, and the entered password matches with the user's original password via the matchPassword method defined in the "User" model

iii. If all of these conditions pass successfully, a success response with a statusCode and a json object of user details (not the password) will be sent and a message of "User Logged In Successfully!".
else, a new Error will be thrown.

And, in the catch block, if any of these errors occur, it will send the status code of 500 and send the respective error message as a message

5. At last export the functions to be able to be accessible from everywhere in the backend
