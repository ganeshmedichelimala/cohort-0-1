const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// app.get("/",(req ,res)=>{
//   res.send("<title>Hello world</title>")
// })

app.use(bodyParser.json());
app.post("/connect", (req, res) => {
  console.log(req.body);
  console.log("received the request body");
});
app.listen(port, function () {
  console.log(`listening on ${port}`);
});
