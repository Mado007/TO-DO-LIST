# TO DO List

### A simple web application for managing your to-do list.

## Introduction

The TO DO List is a web application that allows you to keep track of your tasks and manage your to-do list efficiently. With a user-friendly interface, you can easily add, delete, and mark tasks as completed.


## Features

- Add tasks to your to-do list
- Delete tasks from your to-do list
- Mark tasks as completed
- Responsive design for seamless use on different devices

## Demo


## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (Embedded JavaScript) templating engine
- HTML
- CSS
- CRUD
  
## Description

1. we are creating an Express app and connecting to a local MongoDB database named todoListDB.
2. We define a schema for our to-do items and use the mongoose library to create a Item model.
3. The app.get method handles GET requests to the root URL (/) and finds all items in the Item collection using the Item , find method. 
4. We render an EJS template (list.ejs) and pass in the found items as a context object. 
5. The app.post method handles POST requests to the root URL and creates a new item in the Item collection using the Item.save method. 
6. The app.post method for the /delete route handles POST requests to delete an item by its ID.

## Installation

1. Clone the repository:

   git clone https://github.com/Mado007/to-do-list.git

2. Navigate to the project directory:
   
   cd to-do-list
   
4. Install the dependencies:

   npm install

5. Start the application:

  npm start

6. Access the application in your web browser at
   
    http://localhost:3000

## Usage
- Enter a task in the input field and click "Add" to add it to your to-do list.
- Click the "Delete" button next to a task to remove it from your list.
- Click the checkbox next to a task to mark it as completed.

## 📝 License

Copyright © 2023 [Mahmoud Eid](https://github.com/Mado007).
