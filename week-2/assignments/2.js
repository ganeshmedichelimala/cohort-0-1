/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */

const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());
const port = 3002;
const todos = [];

function indexFinder(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      return i;
    }
  }
  return -1;
}

function loadTodos() {
  if (fs.existsSync("todo.json")) {
    const data = fs.readFileSync("todos.json", "utf-8");
    todos = JSON.parse(data);
  }
}

function saveTodos() {
  fs.writeFileSync("todos.json", JSON.stringify(todos, null, 2));
}

loadTodos();

app.get("/", (req, res) => {
  res.send("GEt / Executed");
});

app.get("/todos", (req, res) => {
  const todosData = todos;

  res.status(200).send(todosData);
});

app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = indexFinder(id);
  if (index == -1) {
    res.status(404).send({
      error: "404 todo not Found",
    });
  }
  res.status(200).send(todos[index]);
});

app.post("/todos", (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 999),
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
  };
  todos.push(newTodo);
  res.status(201).send(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = indexFinder(id);
  if (index == -1) {
    res.status(404).send("todo not found");
  }
  const title = req.body.title;
  const description = req.body.description;
  const completed = req.body.completed;
  todos[index].title = title;
  todos[index].description = description;
  todos[index].completed = completed;
  res.status(200).send("Todo Updated");
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = indexFinder(id);

  if (index === -1) {
    return res.status(404).send({ error: "Todo not found" });
  }

  todos.splice(index, 1); // Remove the item directly from the array
  res.status(200).send("Todo deleted");
});

app.all("*", (req, res) => {
  res.status(404).send({
    error: "Invalid Route",
  });
});

app.listen(port, () => console.log("Server listening on port " + port));
