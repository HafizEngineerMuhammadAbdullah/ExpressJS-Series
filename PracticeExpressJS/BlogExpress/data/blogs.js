// Array of blog objects
const blogs = [
    {
        title: "How to get started with Python",
        content: "This is Python content"
        // author,date ,credit,comment kie FK
    },
    {
        title: "How to get started with JS",
        content: "This is JS content"
    },
    {
        title: "How to get started with Django",
        content: "This is Django content"
    },
    {
        title: "How to get started with CSS",
        content: "This is CSS content"
    }
]



// Array of rich blog objects
const myBlogs = [
    {
        _id: "blog_001",
        title: "How to get started with Python",
        slug: "how-to-get-started-with-python",
        content: "Python is a high-level, interpreted programming language known for its readability. To get started, download Python from the official site, set up a virtual environment, and write your first 'Hello, World!' script. It is widely used in data science, web development, and automation.",
        summary: "An introductory guide to setting up Python and writing your first script.",
        authorId: "auth_987", 
        publishedDate: "2026-03-15T08:30:00Z",
        category: "Backend Development",
        tags: ["Python", "Programming", "Backend"],
        coverImage: "https://unsplash.com",
        readTime: "5 mins",
        likes: 142,
        commentIds: ["comm_101", "comm_102"], // FK references to a comments collection
        isFeatured: true,
        credits: "Official Python Documentation"
    },
    {
        _id: "blog_002",
        title: "How to get started with JS",
        slug: "how-to-get-started-with-js",
        content: "JavaScript is the backbone of modern web interactivity. Unlike languages that run on a server, JavaScript runs natively inside your browser. Start by opening your browser console (F12), learning basic variables, functions, and manipulating the DOM to build dynamic applications.",
        summary: "Learn the core concepts of JavaScript and how to build interactive web elements.",
        authorId: "auth_654",
        publishedDate: "2026-03-20T10:15:00Z",
        category: "Frontend Development",
        tags: ["JavaScript", "Frontend", "Web Dev"],
        coverImage: "https://unsplash.com",
        readTime: "4 mins",
        likes: 210,
        commentIds: ["comm_201"],
        isFeatured: false,
        credits: "MDN Web Docs"
    },
    {
        _id: "blog_003",
        title: "How to get started with Django",
        slug: "how-to-get-started-with-django",
        content: "Django is a high-level Python web framework that encourages rapid design. It follows the MVT (Model-View-Template) architectural pattern. It comes with built-in user authentication, an admin panel, and an ORM system right out of the box, making backend setups incredibly fast.",
        summary: "Discover the power of Django's batteries-included framework for Python web apps.",
        authorId: "auth_987",
        publishedDate: "2026-04-02T14:00:00Z",
        category: "Backend Development",
        tags: ["Django", "Python", "Framework"],
        coverImage: "https://unsplash.com",
        readTime: "7 mins",
        likes: 95,
        commentIds: ["comm_301", "comm_302", "comm_303"],
        isFeatured: true,
        credits: "Django Software Foundation"
    },
    {
        _id: "blog_004",
        title: "How to get started with CSS",
        slug: "how-to-get-started-with-css",
        content: "Cascading Style Sheets (CSS) control the visual presentation of your website. By mastering layouts like Flexbox and CSS Grid, you can transform plain HTML text into stunning, responsive user interfaces that adapt cleanly to both mobile devices and large desktop monitors.",
        summary: "Master typography, colors, Flexbox, and CSS Grid to design beautiful interfaces.",
        authorId: "auth_321",
        publishedDate: "2026-04-10T11:45:00Z",
        category: "Design & Frontend",
        tags: ["CSS", "Web Design", "UI Design"],
        coverImage: "https://unsplash.com",
        readTime: "6 mins",
        likes: 312,
        commentIds: [],
        isFeatured: false,
        credits: "W3Schools & CSS Tricks"
    }
];

module.exports = blogs;


module.exports = myBlogs;