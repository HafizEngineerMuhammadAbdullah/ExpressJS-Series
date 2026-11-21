const express = require("express");
const app = express();
const PORT = 2000;

// Middleware is a function or code or program that handles the request and response cycle. It can be used to modify the request or response objects, perform authentication, logging, error handling, and more. Middleware functions are executed in the order they are defined in the application.

// Applicatio level middleware is bound to an instance of the app object using the app.use() method. It can be used to handle requests for all routes or specific routes.

// Built-in middleware is provided by Express.js and can be used to handle common tasks such as parsing request bodies, serving static files, and handling errors. Examples of built-in middleware include express.json(), express.urlencoded(), and express.static().

// Route-level middleware is bound to a specific route using the app.get(), app.post(), app.put(), or app.delete() methods. It can be used to handle requests for a specific route or group of routes.
// Middleware function to log request details
const requestLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    // Call the next middleware or route handler
    // Actual Response will be sent only when we call next() function. If we don't call next() function then the request will be stuck in the middleware and will not reach the actual response.
    // allow to go to the actual response we have to call next() function. If we don't call next() function then the request will be stuck in the middleware and will not reach the actual response.
    // next();
};


const reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("Please provide age");
    } else if (req.query.age < 18) {
        res.send("You are not allowed to access this page");
    } else {
        next();
    }
};

// Use the middleware for all routes
app.use(requestLogger);
// Use the middleware for a specific route
app.get("/users", reqFilter, (req, res) => {
    res.send("Welcome to the users page");
});

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});