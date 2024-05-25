const express = require("express");
const zod = require("zod");
const app = express();



//validating email and password of length min 8




app.use(express.json());
app.post("/login", (req, res)=>{
  const inputs = req.body
  const schema = zod.object({
    email:zod.string().email(),
    password : zod.string().min(8)
})
  const response = schema.safeParse(inputs)
  if(!response.success){
    res.json({
      msg : "inputs invalid "
    })
    return;
  }
  else{
    if(inputs.email == "ganesh@gmail.com" && inputs.password == "1234567890"){
      res.status(200).send("Successfully logged in")
    }
  }

})

app.listen(3001);
