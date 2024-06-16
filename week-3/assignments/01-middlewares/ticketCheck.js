const express = require("express");
const app = express();



function isOldEnoughMiddleware(req, res, next) {
  const age = parseInt(req.query.age)
  if (age >= 14) {
    next();
  } else {
    res.status(411).json({
      msg: "Sorry you are not of age",
    });
  }
}

app.get("/ride1",isOldEnoughMiddleware,  (req, res) => {
  res.json({
    msg: "you successfully riden ride 2",
  });
  
});

app.get("/ride2",isOldEnoughMiddleware, (req, res) => {
    res.json({
      msg: "you successfully riden ride 2",
    });
});

app.listen(3000, ()=>console.log("3000"));
