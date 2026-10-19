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
     res.sendFile(path.join(__dirname,"../templates/blogHome.html"));
});


router.get("/blogpost/:slug", (req,res) => {
     const myBlog = blogs.filter(e => e.slug == req.params.slug);
     console.log(myBlog);
     
     res.sendFile(path.join(__dirname,"../templates/blogPost.html"));
});


module.exports = router;

// pug is a template engine
// handle bars is an alternative