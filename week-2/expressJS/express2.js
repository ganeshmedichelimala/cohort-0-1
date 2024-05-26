const express = require("express");
const app = express();
const port = 3000;

function sum(n) {
  let a = 0;
  for (let i = 0; i < n; i++) {
    a = a + i;
  }
  return a;
}

app.get("/", function (req, res) {
  const n = req.query.n;

  const ans = sum(n);
  res.send("Sum :" + ans)
});

app.listen(port, () => {
  console.log(`App is  listening on ${port}`);
});
