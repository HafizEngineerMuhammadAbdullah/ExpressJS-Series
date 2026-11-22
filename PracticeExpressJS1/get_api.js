const express = require('express');
const connectDB = require('./db/db_connection');
const mongoose = require('mongoose');
const User = require('./models/user_model');// Path to your User model
const app = express();
const PORT = 5173;



const sampleUsers = [
    {
        fullName: 'Ayesha Khan',
        email: 'ayesha.khan@example.com',
        password: 'StrongPassword123!',
        role: 'user',
    },
    {
        fullName: 'Bilal Ahmed',
        email: 'bilal.admin@example.com',
        password: 'AdminPassword456!',
        role: 'admin',
    },
];

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

app.get('/api/user', async (req, res) => {
    try {
        const users = await User.find();
        res.status(201).json(users);
    }
    catch (error) {
        console.error("Error fetching Users Data: ", error);
        res.status(500).send("Server Error");
    }
})

app.get('/api/user/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: "User Not Found!" });
        }
        res.status(201).json(user);
    }
    catch (error) {
        console.error("Error fetching Users Data: ", error);
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