// Lets start by creating our assignment for today
// A website which has 2 endpoints-
//   POST /signin
//   Body - {
//   username: string
//   password: string
//   }
//     Returns a json web token with username encrypted
// GET /users
//   Headers -
//   Authorization header
//   Returns an array of all users if user is signed in (token is correct)
//   Returns 403 status code if not

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "ganesh@gmail.com",
    password: "123",
    name: "Ganesh",
  },
  {
    username: "naresh@gmail.com",
    password: "123321",
    name: "Naresh",
  },
  {
    username: "tharun@gmail.com",
    password: "123321",
    name: "Tharun",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  // for(let i = 0 ; i< userExists.length; i++){
  //   if(username == ALL_USERS[i].username && ALL_USERS[i].password == password){
  //     return true
  //   }
  //   else{
  //     return false
  //   }
  // }
  let userExist = ALL_USERS.find(
    (user) => user.username == username && user.password == password
  );
  return userExist;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;

  const decoded = jwt.verify(token, jwtPassword);
  const username = decoded.username;
  // return a list of users other than this username
  res.json({
    users: ALL_USERS.filter(function (value) {
      if (value.username == username) {
        return false;
      } else {
        return true;
      }
    }),
  });
});

app.listen(3000);
