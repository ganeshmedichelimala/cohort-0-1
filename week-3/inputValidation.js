const express = require("express")
const app = express()

app.use(express.json())
app.post("/health-checkup", (req, res)=>{
  const kidneys = req.body.kidneys
  const kidneysLength = kidneys.length
  res.send("You have "+ kidneysLength + " kidneys")
})


app

app.listen(3000)