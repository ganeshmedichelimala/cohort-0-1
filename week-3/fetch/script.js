const { response } = require("express");

function getAnimalData(){
  fetch("https://fakerapi.it/api/v1/persons")
  .then((response)=>{
  response.json()
  .then((finalData)=>{
    console.log(finalData)
  })
  })
}