const express = require("express");
const path = require("path");
const PORT = 3000;
const app = express();

// what is static middleware in expressjs?
// Static middleware in ExpressJS is a built-in middleware function that serves static files such as HTML, CSS, JavaScript, images, and other assets directly to the client. It allows developers to specify a directory from which static files can be served, making it easy to deliver resources needed for the frontend of a web application. By using the express.static() middleware, you can efficiently serve these files without having to create individual routes for each file.
// security expose because file extension can be guessed by hackers. So, we can use path module to avoid this security issue. It will give the absolute path of the file and it will be difficult for hackers to guess the file extension.
// Non-executable files like HTML, CSS, and JS are safe to serve as static files. However, serving executable files (like .exe, .bat, etc.) can pose security risks. It's important to ensure that only safe and necessary static files are served to avoid potential vulnerabilities.
// express.static() is aNon-executable method 
// app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contact.html"));
});

app.get("/services", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "services.html"));
});

app.get("/file.jpe", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "file.jpe"));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});


// In **Express 5**, `"*"` is not a valid route pattern. The app throws a `PathError` (“Missing parameter name”) when it registers that route.
// For a catch-all 404 handler, put this after your other routes:

// ```js
// app.use((req, res) => {
//     res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
// });
// ```

// `app.use` catches any unmatched HTTP method. Also, setting `status(404)` matters: without it, the page may be sent with a **200 OK** status. This route is in `pagenotfound.js`.
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "404.html"));
// });

app.listen(PORT, () => {
    console.log(`Server is Listening on PORT http://localhost:${PORT}`);
})