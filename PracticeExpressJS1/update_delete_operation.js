const express = require('express');
const connectDB = require('./db/db_connection');
const Teacher = require('./models/teacher_model');
const app = express();
const PORT = 5173;





const updateTeacher = async (id, updatedData) => {
    const result = await Teacher.updateOne({ _id: id }, { $set: updatedData });
    console.log(
        result.nModified === 0 ? `No updates in Teacher : ${id}` : 'Updated Teacher Data : ',result
    );
}


const deleteTeacher = async (id) => {
    try {
        const deletedTeacher = await Teacher.findByIdAndDelete(id);
        if (!deletedTeacher) {
            console.log(`Teacher Not found...`);
            return;
        }
        console.log("Teacher Deleted successfully", deletedTeacher);
    } catch (error) {
        console.error("Error while deleting data: ", error);
        // res.status(500).send("Server Error")
    }
}


const getTeachers = async () => {
    const teachers = await Teacher.find();
    console.log("Get Teacher Data : ", teachers);
}


const main = async () => {
    try {
        await getTeachers();
        const teacherId = '6b0336a24bf8bd47d9280d8f';
        const updatedData = {
            section: 'Section-F',
            salary: 5500000,
        };
        await updateTeacher(teacherId, updatedData);
        await getTeachers();
        await deleteTeacher(teacherId);
        await getTeachers();
    } catch (error) {
        console.error('Main Function failed:', error);
        process.exitCode = 1;
    }
}
const startServer = async () => {
    await connectDB();
    await main();

    app.listen(PORT, () => {
        console.log(`Server is responding on port http://localhost:${PORT}`);

    })
}

// startServer().then(() => {
//     console.log("Successfully run Server");
// });
startServer().catch((error) => {
    console.error('Application startup failed:', error);
    process.exitCode = 1;
});