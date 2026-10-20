const express = require('express');
const { engine } = require('express-handlebars');

const path = require('path');
const app = express()
const port = 3000


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// app.set('views', './views');

// MiddleWare(Request + Response)
app.use(express.static(path.join(__dirname, "static")));
app.use('/', require(path.join(__dirname, 'routes/blog.js')))

// app.get('/', (req, res) => {
//     res.sendFile();
// });

// app.get('/about', (req, res) => {
//     res.send('About Page!')
// });

// app.get('/page', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
//     res.status(500);//internal server error
//     res.json({ "name": "abdul" });
// });

// app.get('/contact', (req, res) => {
//     res.send('Contact Page!')
// });

app.listen(port, () => {
    console.log(`Blog app listening on port http://localhost:${port}`)
});