const express = require("express")
const app = express()
const port = 3000
function userMiddleware (req, res, next){
  const username = req.headers.username
  const password = req.headers.password
  if(username != "ganesh" || password != "pass"){
    res.status(400).json({
      msg : "Incorrect username or password"
    })
  }
  else{
    next()
  }
}
function kidneyMiddleware (req, res, next){
  const kidneyId = req.query.kidneyId
  if(kidneyId != 1 && kidneyId != 2){
    res.status(400).json({
      msg:"incorrect id"
    })
  }
  
  else{
    next()
  }
}

app.get("/health-checkup", kidneyMiddleware, userMiddleware, (req, res)=>{
  res.json({
    msg : "Your kindey is safe"
  })

})
app.get("/heart", userMiddleware, (req, res)=>{
  res.json({msg:"Heart is OKay !"})
})

app.listen(port,()=>console.log(`Listening on port : ${port}`))