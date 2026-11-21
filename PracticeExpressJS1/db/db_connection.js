const mongoose = require('mongoose');
// require('dotenv').config({ path: './.env.local' });

// const dbConnection = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// };

// const connectionString = process.env.MONGODB_URI;


// This means Mongoose tried to insert a document into the `teachers` collection, but it couldn’t establish or use a MongoDB connection within 10 seconds. Mongoose buffered the operation while waiting, then timed out.

// Common causes include MongoDB not running or reachable, an incorrect connection string, or the insert happening before the connection is ready. No code was changed.

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://abdullahkhalid2k25_db_user:CICNHSoxItN807iq@cluster0.ibqcf9y.mongodb.net/');
        console.log('Connected to MongoDB Successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }

}
module.exports = connectDB;