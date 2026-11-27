const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const File = require('./models/file_model');
const connectDB = require('./db/db_connection');
const app = express();
const PORT = 5173;


// what is multer? Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files. It makes it easy to handle file uploads in Node.js applications by providing a simple API to process incoming files and store them on the server.
const fileUpload = multer({
    // Define the storage configuration for multer, specifying the destination folder and filename format for uploaded files.
    // disk storage is used to store the uploaded files on the server's disk. The destination function specifies the folder where the files will be saved, and the filename function generates a unique name for each uploaded file by combining the field name, current timestamp, and original filename.
    storage: multer.diskStorage({
        // destination means ? 
        destination: function (req, file, callback) {
            callback(null, 'file_uploads');
        },
        // filename means 
        filename: function (req, file, callback) {
            const uniqueName = file.fieldname + "-" + Date.now() + "-" + file.originalname;
            callback(null, uniqueName);
        }

    })
}).single("my_file");

//Why Post HTTP method is used for file upload? Because Post method is used to send data to the server to create/update a resource. In this case, we are sending a file to the server to be stored in the database. The Post method is appropriate for this operation because it allows us to send data in the request body, which is necessary for file uploads.

app.post('/upload', fileUpload, async (req, res) => {
     
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    try {
        // extract the file path from the uploaded file which is stored in req.file.path and save it to the database using the File model. The file path is then saved to the database as a new document in the File collection.
        const filePath = req.file.path;
        // filePath is the path where the uploaded file is stored on the server. It is extracted from the req.file object, which is populated by multer after a successful file upload. The filePath is then used to create a new document in the File collection of the database, allowing us to keep track of the uploaded files and their locations on the server.
        const newFile = new File({ filePath });
        // save the new file document to the database using the save() method. This method is provided by Mongoose and is used to persist the document in the MongoDB collection. By calling await newFile.save(), we ensure that the operation is completed before proceeding, allowing us to handle any potential errors that may occur during the save process.
        await newFile.save();
        res.status(200).json({ message: 'File uploaded and saved to database successfully!' });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ message: 'Error uploading file' });
    }
});


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

