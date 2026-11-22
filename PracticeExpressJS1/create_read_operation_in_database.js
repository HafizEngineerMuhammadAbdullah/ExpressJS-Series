const express = require('express');
const connectDB = require("./db/db_connection");
const Teacher = require('./models/teacher_model');
const PORT = 3000;
const app = express();

// connectDB();

const addTeacher = async () => {
    await  Teacher.create({
        name: 'Dr Prof Abdul',
        email: 'abdullahkhan@gmail.com',
        phoneNo: 0o3120122442,
        department: 'Computer Engineering & IT',
        section: 'Section-A',
        salary: 4500000,
        arrival_time: '9:00AM',
        exit_time: '5:45PM',
        duration: '7-hours'
    })
}


const getTeachers = async () => {
    const teachers = await Teacher.find();
    console.log(teachers);
}


// Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const start = async () => {
  await connectDB();
  await addTeacher();
  await getTeachers();
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
};

start().catch((error) => {
  console.error('Application startup failed:', error);
  process.exitCode = 1;
});



// Read 
// Completed with input: {
//   "path": "C:\\Users\\A1\\Desktop\\Web Development and Designing\\ExpressJS\\PracticeExpressJS1\\mongodb_database.js"
// }

// Read 
// Completed with input: {
//   "path": "C:\\Users\\A1\\Desktop\\Web Development and Designing\\ExpressJS\\PracticeExpressJS1\\db\\db_connection.js"
// }

// Read 
// Completed with input: {
//   "path": "C:\\Users\\A1\\Desktop\\Web Development and Designing\\ExpressJS\\PracticeExpressJS1\\models\\teacher_model.js"
// }

// Read 
// Completed with input: {
//   "path": "C:\\Users\\A1\\Desktop\\Web Development and Designing\\ExpressJS\\PracticeExpressJS1\\package.json"
// }

// In `mongodb_database.js`, `connectDB()` starts connecting, but you don’t `await` it—so `addTeacher()` may run before MongoDB is ready. Also, `db_connection.js` catches connection errors without rethrowing them, so the app continues as if the connection succeeded.

// Make the connection helper let errors propagate:

// ```js
// const mongoose = require('mongoose');

// const connectDB = async () => {
//   await mongoose.connect(process.env.MONGODB_URI);
//   console.log('Connected to MongoDB Successfully!');
// };

// module.exports = connectDB;
// ```

// Then wait for the connection before inserting or starting the server:

// ```js
// const start = async () => {
//   await connectDB();
//   await addTeacher();

//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// };

// start().catch((error) => {
//   console.error('Application startup failed:', error);
//   process.exitCode = 1;
// });
// ```

// Set `MONGODB_URI` in your environment rather than hard-coding it. **Also, the connection string currently in your source contains database credentials. Rotate that database user’s password now**, then use the new credentials only in the environment variable. If it still fails afterward, check that your Atlas cluster is running and your current IP is allowed in its network access settings.


// `queryTxt ETIMEOUT` means Mongoose timed out while asking DNS for the MongoDB Atlas connection details. It’s failing before it reaches the database, so this is a DNS/network or hostname issue—not a problem with the `Teacher` model or insert.

// Try these checks:

// 1. Verify the hostname in `MONGODB_URI` exactly matches the one Atlas shows under **Connect → Drivers**.
// 2. In PowerShell, test DNS resolution:
//    ```powershell
//    Resolve-DnsName -Type SRV _mongodb._tcp.cluster0.ibqcf9y.mongodb.net
//    Resolve-DnsName -Type TXT cluster0.ibqcf9y.mongodb.net
//    ```
//    If these time out, try another network (for example, disable VPN or try a mobile hotspot) or check whether your DNS/firewall is blocking DNS queries.
// 3. If DNS still fails, use the **standard (non-SRV) connection string** from Atlas instead, following its instructions.

// Atlas IP allowlisting is worth checking if DNS starts working but the database connection still fails. And if you haven’t already, rotate the database password that was exposed in your source file.