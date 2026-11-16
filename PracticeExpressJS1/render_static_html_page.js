const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;


const myHtmlPagePath = path.join(__dirname, "public");
console.log(myHtmlPagePath);


app.get("/", (req,res) => {
    res.send("Welcome!")
});



app.listen(PORT, () => {
    console.log(`Server is Listening on PORT http://localhost:${PORT}`);
})
