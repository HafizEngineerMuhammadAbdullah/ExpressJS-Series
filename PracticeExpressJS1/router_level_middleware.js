const express = require('express');
const reqFilter = require('./middleware_fnx');
const app = express();

const route = express.Router();

// Apply the middleware to the router
route.use(reqFilter);

// Define a sample route
route.get('/dashboard', (req, res) => {
  res.send('Welcome to the dashboard!');
});

// Middleware function to log request details
function logRequest(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next(); // Pass control to the next middleware function
}

// Apply the middleware to all routes
// app.use(logRequest);

// Define a sample route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Use the router for all routes starting with /
app.use('/', route);
// when  applyting middleware to groups of routes we can use router-level middleware

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});