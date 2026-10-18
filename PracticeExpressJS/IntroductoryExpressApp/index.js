const express = require('express');
const path = require('path');
const app = express()
const port = 3000


// My own Middleware(Use in Advance ExpressJs)
const myMiddleware = (req,res,next) => {
   console.log(req);
   next();//next Middleware turn/next middleware run
};
// MiddleWare(Request + Response)
app.use(express.static(path.join(__dirname,"public")));
app.use(myMiddleware);

app.get('/hello/:name', (req, res) => {
    res.send('Hello World!'+ req.params.name);
});

app.get('/about', (req, res) => {
    res.send('About Page!')
});

app.get('/page', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    res.status(500);//internal server error
    res.json({ "name": "abdul" });
});

app.get('/contact', (req, res) => {
    res.send('Contact Page!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});