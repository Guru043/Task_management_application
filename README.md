# Task_management_application
Task Management Application
This is a simple task management application built using Node.js, Express, MySQL, and Docker. The application allows users to create, update, delete, and manage tasks.

Features
Add a new task with a title, description, and status.
View a list of all tasks.
Update task details (e.g., title, description, status).
Delete tasks.
Fully containerized using Docker for easy setup.
Table of Contents
Technologies Used
Setup Instructions
Prerequisites
Installation
API Endpoints
Testing
License
Technologies Used
Node.js (Backend)
Express (Web framework for Node.js)
MySQL (Relational Database)
Docker (Containerization)
Setup Instructions
Prerequisites
Before running the application, ensure you have the following installed:

Docker: Install Docker
Docker Compose: Install Docker Compose
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/task-management-app.git
cd task-management-app
Environment Configuration:

Copy the .env.example file and rename it to .env:
bash
Copy code
cp .env.example .env
Update the .env file with your own MySQL credentials:
makefile
Copy code
MYSQL_ROOT_PASSWORD=your_root_password
MYSQL_DATABASE=your_database_name
MYSQL_USER=your_user
MYSQL_PASSWORD=your_password
Run the Application Using Docker Compose:

Build and start the containers:
bash
Copy code
docker-compose up --build
Docker will pull the necessary images, set up MySQL, and run your Node.js server.
Access the Application:

The Node.js server will be running on http://localhost:3000.
MySQL will be available on port 3306 (if you want to access it directly).
API Endpoints
Here are the main API endpoints for the task management system:

Method	Endpoint	Description
GET	/tasks	Get all tasks
POST	/tasks	Add a new task
GET	/tasks/:id	Get task by ID
PUT	/tasks/:id	Update a task by ID
DELETE	/tasks/:id	Delete a task by ID
Example POST Request (Add a Task)
Endpoint: /tasks
Method: POST
Request Body:

json
Copy code
{
    "title": "New Task",
    "description": "This is a new task",
    "status": "Pending"
}
Testing
To test the API, you can use Postman or curl.

Test Adding a Task (POST Request):
Open Postman and create a new POST request:

URL: http://localhost:3000/tasks
Body: Select raw and JSON, and input the following:
json
Copy code
{
    "title": "Sample Task",
    "description": "This is a sample task.",
    "status": "Pending"
}
Send the request and verify that the task is added successfully.

Docker Commands
Start containers:

bash
Copy code
docker-compose up
Stop containers:

bash
Copy code
docker-compose down
Rebuild containers (after code changes):

bash
Copy code
docker-compose up --build
License
This project is licensed under the MIT License. See the LICENSE file for details.
