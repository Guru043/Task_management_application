# Task Management Application

This is a simple task management application built using **Node.js**, **Express**, **MySQL**, and **Docker**. The application allows users to create, update, delete, and manage tasks.

## Features

- Add a new task with a title, description, and status.
- View a list of all tasks.
- Update task details (e.g., title, description, status).
- Delete tasks.
- Fully containerized using Docker for easy setup.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [License](#license)

## Technologies Used

- **Node.js** (Backend)
- **Express** (Web framework for Node.js)
- **MySQL** (Relational Database)
- **Docker** (Containerization)

## Setup Instructions

### Prerequisites

Before running the application, ensure you have the following installed:

- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: [Install Docker Compose](https://docs.docker.com/compose/install/)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/task-management-app.git
   cd task-management-app

## API Endpoints

Here are the main API endpoints for the task management system:

| Method | Endpoint       | Description                    |
|--------|----------------|--------------------------------|
| GET    | `/tasks`        | Get all tasks                  |
| POST   | `/tasks`        | Add a new task                 |
| GET    | `/tasks/:id`    | Get task by ID                 |
| PUT    | `/tasks/:id`    | Update a task by ID            |
| DELETE | `/tasks/:id`    | Delete a task by ID            |

### Example POST Request (Add a Task)

**Endpoint**: `/tasks`  
**Method**: `POST`  
**Request Body**:
```json
{
    "title": "New Task",
    "description": "This is a new task",
    "status": "Pending"
}
```
## Testing

To test the API, you can use [Postman](https://www.postman.com/) or `curl`.

### Test Adding a Task (POST Request)

1. Open **Postman** and create a new POST request:
   - **URL**: `http://localhost:3000/tasks`
   - **Body**: Select `raw` and `JSON`, and input the following:
     ```json
     {
         "title": "Sample Task",
         "description": "This is a sample task.",
         "status": "Pending"
     }
     ```

2. Send the request and verify that the task is added successfully.

---

### Test Getting All Tasks (GET Request)

1. Open **Postman** and create a new GET request:
   - **URL**: `http://localhost:3000/tasks`
   
2. Send the request to retrieve the list of tasks and verify the response.

---

### Test Getting a Single Task (GET Request by ID)

1. Open **Postman** and create a new GET request:
   - **URL**: `http://localhost:3000/tasks/1`
   
2. Send the request to retrieve the task with ID `1` and verify the response.

---

### Test Updating a Task (PUT Request)

1. Open **Postman** and create a new PUT request:
   - **URL**: `http://localhost:3000/tasks/1`
   - **Body**: Select `raw` and `JSON`, and input the following:
     ```json
     {
         "title": "Updated Task",
         "description": "This is an updated task.",
         "status": "Completed"
     }
     ```

2. Send the request and verify that the task with ID `1` is updated successfully.

---

### Test Deleting a Task (DELETE Request)

1. Open **Postman** and create a new DELETE request:
   - **URL**: `http://localhost:3000/tasks/1`

2. Send the request to delete the task with ID `1` and verify the response.

