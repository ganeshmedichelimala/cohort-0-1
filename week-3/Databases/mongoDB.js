const mongoose = require("mongoose")
const url=`mongodb+srv://ganesh2946:Ganesh1234@cluster0.baamb.mongodb.net/newGanesh?retryWrites=true&w=majority&appName=Cluster0`;


mongoose.connect(url).then(()=>{console.log('connected to database');}).catch((err)=>{'error connecting to database',err});


const {Schema,model}=mongoose;

const userSchema=new Schema({
    name:String,
    age:Number
})

const User=model('User',userSchema);


const insertUser=async()=>{
    // const newuser=new User({name:'Rakesh',age:21});
    const newuser1=new User({name:'Ganesh',age:21});
    const result=await newuser1.save();
    console.log(`user successfully created with id : ${result._id}`);
    
}
insertUser()
