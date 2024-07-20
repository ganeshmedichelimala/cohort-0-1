/*
 title : string
 description : string
 completed : boolean
*/

const mongoose = require("mongoose");
//mongodb url body
mongoose.connect(
  "mongodb+srv://ganesh:Ganesh2003@cluster0.te11ccp.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {
  todo,
};
