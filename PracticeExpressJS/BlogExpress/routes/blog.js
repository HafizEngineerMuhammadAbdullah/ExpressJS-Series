const express = require('express');
const path  = require("path");
const blogs = require("../data/blogs.js");


const router = express.Router();
router.get("/", (req,res) => {
     res.sendFile(path.join(__dirname,"../templates/index.html"));
});


router.get("/blog", (req,res) => {
    blogs.forEach((blog) => {
        console.log(blog);
        // console.log(blog.title);
        
    });
     res.sendFile(path.join(__dirname,"../templates/index.html"));
});


module.exports = router;