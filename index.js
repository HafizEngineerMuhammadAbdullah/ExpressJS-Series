const express = require('express');
const path = require('path');
const app = express()
const port = 3000


// MiddleWare(Request + Response)
app.use(express.static(path.join(__dirname,"public")));

app.get('/hello', (req, res) => {
    res.send('Hello World!')
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