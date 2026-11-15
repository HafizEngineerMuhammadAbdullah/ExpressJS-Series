const express = require("express");
const app = express();
const PORT = 3000;

// What is HTTP method and Objects ?
// HTTP methods are a set of request methods used by the client to communicate with the server. The most commonly used HTTP methods are GET, POST, PUT, DELETE, PATCH, and OPTIONS. Each method serves a specific purpose in the context of web development.
// So what is response and request objects ?
// In ExpressJS, the response and request objects are two important objects that are used to handle HTTP requests and responses. The request object represents the incoming HTTP request from the client, while the response object represents the outgoing HTTP response that is sent back to the client. These objects provide a set of methods and properties that allow developers to handle various aspects of HTTP communication, such as reading request data, sending response data, setting headers, and managing cookies. Overall, the response and request objects are essential components of ExpressJS that enable developers to build robust web applications and APIs.
// it means it is a request from the client to the server and the server will respond to the client with a response. The request object contains information about the incoming request, such as the HTTP method, URL, headers, and body data. The response object provides methods for sending data back to the client, such as res.send(), res.json(), and res.render(). These objects are used together to handle HTTP requests and responses in ExpressJS applications.
// it means they are not an object of HTTP but they are an object of ExpressJS. The request and response objects are specific to the ExpressJS framework and provide additional functionality beyond what is available in the standard HTTP module. They are designed to simplify the process of handling HTTP requests and responses in web applications built with ExpressJS. Overall, the request and response objects are essential components of ExpressJS that enable developers to build robust web applications and APIs.
app.get('/', (req, res) => {
    // Routing Parameters in ExpressJS are a way to capture values from the URL and use them in your application. They allow you to define dynamic routes that can accept parameters, which can be used to customize the response based on the input provided by the client. Routing parameters are defined using a colon (:) followed by the parameter name in the route path. For example, if you have a route defined as /users/:id, the :id part is a routing parameter that can capture the value of the id from the URL. You can then access this value in your route handler using req.params.id. Overall, routing parameters are a powerful feature of ExpressJS that enable developers to create dynamic and flexible routes for their web applications.
    // What is Query Parameters in ExpressJS ?
    // Query parameters in ExpressJS are a way to pass data to the server through the URL. They are typically used to filter or sort data, or to provide additional information to the server about the request being made. Query parameters are defined using a question mark (?) followed by a key-value pair in the URL. For example, if you have a URL defined as /users?name=John, the name=John part is a query parameter that can be accessed in your route handler using req.query.name. You can also define multiple query parameters by separating them with an ampersand (&). Overall, query parameters are a useful feature of ExpressJS that enable developers to pass data to the server through the URL and customize the response based on the input provided by the client.
    // how many types of parameters are there in ExpressJS ?
    // explain? Types of Parameters in ExpressJS:
    // 1. Route Parameters: These are parameters that are defined in the route path and are used to capture values from the URL. They are defined using a colon (:) followed by the parameter name in the route path. For example, if you have a route defined as /users/:id, the :id part is a route parameter that can capture the value of the id from the URL. You can then access this value in your route handler using req.params.id.
    // 2. Query Parameters: These are parameters that are passed to the server through the URL and are typically used to filter or sort data, or to provide additional information to the server about the request being made. They are defined using a question mark (?) followed by a key-value pair in the URL. For example, if you have a URL defined as /users?name=John, the name=John part is a query parameter that can be accessed in your route handler using req.query.name.
    // 3. Body Parameters: These are parameters that are sent to the server in the body of the HTTP request. They are typically used to send data to the server, such as form data or JSON data. You can access body parameters in your route handler using req.body, but you need to use middleware like body-parser or express.json() to parse the request body before accessing it.
    // Overall, these three types of parameters in ExpressJS enable developers to capture values from the URL, pass data to the server through the URL, and send data to the server in the body of the HTTP request, allowing for dynamic and flexible routing in web applications.
    console.log("Query Parameters:", req.query);
    console.log("Query Name Parameters:", req.query.name);

    const myName = req.query.name;
    if (!myName) {
        res.send("<h1 style='color:orange;text-align:center;'>Welcome to ExpressJS Journey</h1>");
    } else {
        res.send(`<h1 style='color:orange;text-align:center;'>Welcome to ExpressJS Journey, ${myName}!</h1>`);
    }
});


app.listen(PORT, () => {
    {
        console.log("Server is responding...");
    }
})