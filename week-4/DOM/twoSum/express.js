const express = require("express");

const app = express();

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  // Check if both a and b are valid numbers
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Invalid input");
  }

  const sum = a + b;
  res.send(`The sum of ${a} and ${b} is ${sum}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
