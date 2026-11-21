const express = require("express");
const { shoppingOrder } = require("./json_data");
// const data = require("./json_data").shoppingOrder;
const app = express();
// Dynamic Pages With EJS | URL Parameters & Common Pages
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { title: "Home Page", shoppingOrder: shoppingOrder });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About Page" });
});

app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact Page" });
});

app.get("/profile/:name/:id", (req, res) => {
    const userInfo = {
        name: req.params.name,
        id: req.params.id,
        fav: ["cricket","football","tennis"]
    };
    res.render("profile", { title: "Profile Page", userInfo: userInfo });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

