const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const connectDB = require('./db/db_connection');
const app = express();
const PORT = 5173;
const secretKey = 'abd';

// Json Web Token is a secure way to transmit/send the json data as an information between two parties.
// part1: header(Token MetaData)
// part2: payload (actual data)
// part3: signature ( header + payload + secret key ka hash create ki jati hai that are signed(secure krega)

// JWT is used in Authentication to protect the route of application

app.post('/login', (req, res) => {
    const user = {
        username: 'Abdullah',
        email: 'abdullah2@gmail.com'
    };
    // create an hash
    const token = jwt.sign({ user }, secretKey, { expiresIn: '500s' });
    res.json({ token });
})

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
        const token = bearerHeader.split(" ");
        req, token = token;
        next();
    } else {
        // 403 -> Unauthorized user
        res.status(403).json({ result: 'Token is invalid' })
    }
}

app.post('/protected', (req, res) => {
    jwt.verify(req.token, secretKey, (err, authData) => {
        if (err) {
            res.status(403).json({ result: 'Unauthorized User!' });
        } else {// match the token
            res.json({
                message: 'You are an  Authorized User',
                authData 
            })
        }
    })
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

