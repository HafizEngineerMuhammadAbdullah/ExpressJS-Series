const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user_model');
const connectDB = require('./db/db_connection');
const app = express();
const PORT = 5173;


// we can create search api with post and put http methods but here we are using get method because get method is used to retrieve data from the server and it is idempotent which means it can be called multiple times without changing the state of the server. It is also safe because it does not modify any data on the server. It is also cacheable which means the response can be cached by the client or a proxy server. It is also bookmarkable which means the URL can be bookmarked and shared with others. It is also used to retrieve data from the server and it is also used to send data to the server in the form of query parameters in the URL. It is also used to send data to the server in the form of request body in the case of post and put methods.


app.get('/api/search/:value', async (req, res) => {
    try {
        let searchValue = req.params.value; // Extract the search value from the request parameters
        console.log("Search Value:", searchValue);
        //const { name, email } = req.query; // Extract query parameters from the request
        // console.log("Query Parameters:", req.query);
        const users = await User.find({
            $or: [
                { name: { $regex: searchValue, $options: 'i' } }, // Case-insensitive search for name
                { email: { $regex: searchValue, $options: 'i' } } // Case-insensitive search for email
            ]
        });
        res.json(users);
    }
    catch (error) {
        console.error("Error Searching User Data: ", error);
        res.status(500).send("Server Error");
    }
})

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is responding on port https://localhost:${PORT}:...`);
    });
}   

startServer().catch((error) => {
    console.error('Application startup failed:', error);
    process.exitCode = 1;
});
