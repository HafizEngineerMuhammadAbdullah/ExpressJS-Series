// Template Engine is a way to generate HTML dynamically by embedding JavaScript code within HTML templates. It allows developers to create reusable templates and render dynamic content on the server side before sending it to the client. Popular template engines for Express.js include EJS, Pug (formerly Jade), and Handlebars.

const express = require("express");
const path = require("path");
const shoppingOrder = require("./json_data").shoppingOrder;
const ejs = require("ejs");
const PORT = 3000;
const app = express();

// app.set() method is used to set application-level settings in Express.js. It allows you to configure various aspects of the application, such as the view engine, views directory, and other settings that affect the behavior of the Express app. In this case, we are using app.set() to configure the view engine and views directory for rendering dynamic HTML templates.
// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Define routes
app.get("/", (req, res) => {
    res.render("index",  { shoppingOrder: shoppingOrder, title: "Home Page" });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About Us" });
});

app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact Us" });
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).render("404", { title: "Page Not Found" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is Listening on PORT http://localhost:${PORT}`);
});