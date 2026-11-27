const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user_model');
const connectDB = require('./db/db_connection');
const app = express();
const PORT = 5173;




// here .json() middleware is used to parse incoming JSON requests and put the parsed data in req.body. It is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser. This allows us to access the data sent in the request body as a JavaScript object, making it easier to work with the data in our route handlers.
app.use(express.json());

app.patch('/api/user/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        console.log("Body", req.body);
        const updateData = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: updateData},
            // { new: true } option returns the updated document otherwise it returns the original document before the update
            { new: true, runValidators: true }
        );
        if(!updatedUser){
            res.status(404).send("No Such User Found!")
        }

        // But here we are sending the updatedUser object along with a success message in the response. The spread operator (...) is used to create a new object that contains all the properties of updatedUser, and then we add a msg property to it. This way, the client receives both the updated user data and a confirmation message in a single response.
        // But here .json() method is used to send a JSON response. It converts the JavaScript object into a JSON string and sends it as the response body. This is useful for sending structured data back to the client, especially in RESTful APIs where JSON is a common format for data exchange.
        res.status(200).json({...updatedUser, msg: "User updated Successfully!..."})
    } catch (error) {
        console.error("Error Updating User Data: ", error);
        res.status(500).send("Server Error");
    }


})
const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is responing on port https://localhost:${PORT}:...`);
    });
}

startServer().catch((error) => {
    console.error('Application startup failed:', error);
    process.exitCode = 1;
});