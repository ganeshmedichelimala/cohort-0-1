// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

const express = require('express');
const app = express();

// Initialize the numberOfRequestsForUser object
let numberOfRequestsForUser = {};

// Reset the numberOfRequestsForUser object every second
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000);

// Rate limiting middleware
app.use((req, res, next) => {
    // Retrieve user ID from the headers
    const userId = req.headers['user-id'];

    // If user ID is not provided, respond with a 400 status
    if (!userId) {
        return res.status(400).json({ msg: 'User ID is required' });
    }

    // If user ID exists in the tracking object, increment the request count
    if (numberOfRequestsForUser[userId]) {
        numberOfRequestsForUser[userId]++;
        // If request count exceeds 5, respond with a 404 status
        if (numberOfRequestsForUser[userId] > 5) {
            return res.status(404).json({ msg: 'number of requests are over' });
        }
    } else {
        // If user ID does not exist, initialize request count to 1
        numberOfRequestsForUser[userId] = 1;
    }

    // Proceed to the next middleware or route handler
    next();
});

// Define a GET endpoint for '/user'
app.get('/user', (req, res) => {
    res.status(200).json({ name: 'john' });
});

// Define a POST endpoint for '/user'
app.post('/user', (req, res) => {
    res.status(200).json({ msg: 'created dummy user' });
});

// Start the server on port 3000 and log a message
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
