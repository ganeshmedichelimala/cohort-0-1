const jwt = require("jsonwebtoken")

const value = {
  name : "Ganesh",
  accountNumber:62320325162


} 


const token = jwt.sign({value:value},"123456")
console.log("token : "+token)