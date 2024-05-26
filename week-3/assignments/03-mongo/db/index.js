const mongoose = require('mongoose');
const zod = require('zod');

// Connect to MongoDB
mongoose.connect('mongodb+srv://ganesh2946:Ganesh1234@cluster0.baamb.mongodb.net/newGanesh?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define schemas
const AdminSchema = new mongoose.Schema({
    admin: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String
});

const CourseSchema = new mongoose.Schema({
    course: String,
    courseFee: Number
});

// Create models
const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

// Example usage (for testing purposes)
async function run() {
    try {
        const admin = new Admin({ admin: 'adminUser', password: 'adminPass' });
        const user = new User({ username: 'user1', password: 'userPass', name: 'User One' });
        const course = new Course({ course: 'Node.js Course', courseFee: 100 });
        await admin.save();
        await user.save();
        await course.save();
        console.log('Data saved successfully');
    } catch (error) {
        console.error('Error saving data:', error);
    } finally {
        mongoose.connection.close();
    }
}

run();
