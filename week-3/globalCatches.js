const express = require("express")
const app = express()

app.use(express.json())
app.post("/health-checkup", (req, res, next)=>{
  const kidneys = req.body.kidneys
  const kidneysLength = kidneys.length
  res.send("You have "+kidneysLength+" kidneys")
  next()
})



//global catches 

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    msg: "Sorry, server down"
  });
});

app.listen(3000)