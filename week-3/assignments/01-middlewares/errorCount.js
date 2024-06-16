// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint




const express = require("express");

const app = express();
// Initialize errorCount to track the number of exceptions
let errorCount = 0;

// Define a GET endpoint for '/user'
app.get("/user", function (req, res) {
  // Simulate an exception by throwing an error
  throw new Error("User not found");
  // This line will not be reached due to the exception above
  res.status(200).json({ name: "john" });
});

// Define a POST endpoint for '/user'
app.post("/user", function (req, res) {
  // Respond with a success message for the POST request
  res.status(200).json({ msg: "created dummy user" });
});

// Define a GET endpoint for '/errorCount'
app.get("/errorCount", function (req, res) {
  // Respond with the current value of errorCount
  res.status(200).json({ errorCount });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  // Increment the errorCount each time an exception is caught
  errorCount++;
  // Respond with a 404 status code and an empty JSON object
  res.status(404).send({});
});

// Start the server on port 3000 and log a message
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
