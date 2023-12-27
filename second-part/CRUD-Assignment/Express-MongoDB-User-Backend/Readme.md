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

### "server.js" :
