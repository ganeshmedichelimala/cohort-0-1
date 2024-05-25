const users = [
  {
    name: "John",
    age: 25,
    gender: "male",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
  let numberOfUnHealthyKidney = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnHealthyKidney,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

app.put("/", (req, res) => {
  if (checkForUnhealthyKidney()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true;
    }
    res.send("Kidneys updated");
  } else {
    res.status(411).json({
      message: "There are no unHealthy kidneys left for the user",
    });
  }
});

//function for checking unhealthy kidneys
function isThereOneUnhealthyKidney() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    atleastOneUnhealthyKidney = true;
  }
  return atleastOneUnhealthyKidney;
}

function checkForUnhealthyKidney(){
  let unHealthyKidney = false
  for(let i = 0 ; i < users[0].kidneys.length; i++){
    if(users[0].kidneys[i].healthy == false){
      unHealthyKidney = true
      return unHealthyKidney
    }
  }
  return unHealthyKidney
}


app.delete("/", (req, res) => {
  if (isThereOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.send("Kidneys removed!");
  } else {
    res.status(411).send("You have no bad kidneys");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
