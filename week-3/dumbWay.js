const express = require("express");
const app = express();
app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;
  if (username != "ganesh" || password != "pass") {
    res.status(400).json({
      msg: "wrong input",
    });
    return;
  }
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(404).json({
      msg: "wrong input",
    });
    return;
  }
  res.json({
    msg: "Your kindeys are fine",
  });
});

app.listen(3000, () => console.log("3000"));
