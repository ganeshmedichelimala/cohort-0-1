const user1 = {
  name:"Ganesh",
  gender:"male"
}

// console.log(user1["name"])
// console.log(user1.name)

const allUsers = [{
  name:"Ganesh",
  gender:"male",
  metaData:{
    age:25,
    location:"Bangalore"
  }
},
{
  name:"Naresh",
  gender:"male"
},
{
  name:"Suresh",
  gender:"female"
}]

console.log(allUsers[0].metaData.location)

for (let i = 0; i < allUsers.length; i++) {
  if(allUsers[i].gender === "male") {
    console.log(allUsers[i].name)
    }
}