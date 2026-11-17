// const express = require("express");
// const path = require("path");
// const app = express();
// const PORT = 3000;


// const myHtmlPagePath = path.join(__dirname, "public");
// console.log(myHtmlPagePath);


// app.get("/", (req,res) => {
//     res.send("Welcome!")
// });



// app.listen(PORT, () => {
//     console.log(`Server is Listening on PORT http://localhost:${PORT}`);
// })



//one of the best Framework for NodeJS is ExpressJS. It is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It allows developers to build web applications and APIs quickly and easily.
// It is one of the most popular frameworks for Node.js and is widely used in the industry. ExpressJS simplifies the process of building web applications by providing a set of tools and features that make it easier to handle routing, middleware, and HTTP requests and responses. It also supports a wide range of plugins and extensions that can be used to add additional functionality to your application. Overall, ExpressJS is a powerful and flexible framework that can help developers build high-quality web applications quickly and efficiently.
// One of the most demanding technologies in the world is NodeJS. It is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side, enabling them to build scalable and high-performance applications. NodeJS is designed to be lightweight and efficient, making it ideal for building real-time applications, such as chat applications, online gaming platforms, and collaborative tools. It also has a large and active community of developers who contribute to its development and provide support through forums, tutorials, and open-source libraries. Overall, NodeJS is a powerful technology that has revolutionized the way web applications are built and deployed.
// ExpressJS is fast, unopinionated, and minimalist web framework for Node.js. It is designed to make the development of web applications and APIs easier and more efficient. ExpressJS provides a simple and intuitive API that allows developers to handle routing, middleware, and HTTP requests and responses with ease. It also supports a wide range of plugins and extensions that can be used to add additional functionality to your application. Overall, ExpressJS is a powerful and flexible framework that can help developers build high-quality web applications quickly and efficiently.
// Unopinionated means that ExpressJS does not impose any specific structure or conventions on your application. It allows developers to choose their own architecture and design patterns, giving them the freedom to build applications in a way that best suits their needs. This flexibility makes ExpressJS a popular choice for developers who want to have full control over their application's structure and behavior. Overall, ExpressJS is a powerful and flexible framework that can help developers build high-quality web applications quickly and efficiently.


const express = require("express");
const path = require("path");
const PORT = 3000;
const app = express();

// what is static middleware in expressjs?
// Static middleware in ExpressJS is a built-in middleware function that serves static files such as HTML, CSS, JavaScript, images, and other assets directly to the client. It allows developers to specify a directory from which static files can be served, making it easy to deliver resources needed for the frontend of a web application. By using the express.static() middleware, you can efficiently serve these files without having to create individual routes for each file.
// security expose because file extension can be guessed by hackers. So, we can use path module to avoid this security issue. It will give the absolute path of the file and it will be difficult for hackers to guess the file extension.
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`Server is Listening on PORT http://localhost:${PORT}`);
})