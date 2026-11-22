const express = require('express');
const connectDB = require('./db/db_connection');
const mongoose = require('mongoose');
const User = require('./models/user_model');// Path to your User model
const app = express();
const PORT = 5173;



const sampleUsers = [
    {
        fullName: 'Dr Abdullah Khan',
        email: 'abdullah.khan@example.com',
        password: 'AdminPassword457!',
        role: 'admin',
    },
    {
        fullName: 'Ali Ahmed',
        email: 'ali.admin@example.com',
        password: 'StrongPassword1234!',
        role: 'user',
    },
];

// Convert JSON data to JavaScript objects and validate them against the User model schema. If the data is valid, it will be inserted into the database. If not, an error will be thrown, and the invalid data will not be saved.
app.use(express.json());


async function seedUsers() {
    try {
        // User.create() runs validation and the pre('save') password-hashing hook
        const createdUsers = await User.create(sampleUsers);
        console.log('Users created:', createdUsers);
    } catch (error) {
        console.error('Error creating users:', error.message);
    } finally {
        // await mongoose.disconnect();
    }
}
// Post API to create a new user
// it means to create a new user in the database using the POST method. The endpoint is '/api/user' and it will accept user data in the request body. The server will then create a new user document in the MongoDB database using the User model and return the created user data as a response.
// Post API Frontend(Data) -> Backend(Data) -> Database(Data)
// We send the data from the frontend to the backend using a POST request. The backend receives the data, processes it, and then stores it in the database. This flow allows for creating new records in the database based on user input from the frontend.
// This allows us to insert new user data into the database by sending a POST request to the '/api/user' endpoint. The server will handle the request, create a new user document in the database, and respond with the created user data or an error message if something goes wrong.
app.post('/api/user', async (req, res) => {
    try {
        const { fullName, email, password, role } = req.body;

        const newUser = new User({
            fullName,
            email,
            password,
            role
        })
        const user = await newUser.save();
        res.status(201).json({ ...newUser, msg: "Successfully Send Data" });
    }
    catch (error) {
        console.error("Error Saving User Data: ", error);
        res.status(500).send("Server Error");
    }
})


const startServer = async () => {
    await connectDB();
    await seedUsers();

    app.listen(PORT, () => {
        console.log(`Server is responding on port http://localhost:${PORT}`);
    })
}

startServer().catch((error) => {
    console.error('Application startup failed:', error);
    process.exitCode = 1;
});