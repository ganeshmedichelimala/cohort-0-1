function sum(val1,val2,functionToCall){
  let result = val1 + val2;
  functionToCall(result)
}
function displayResult(result){
  console.log("result of sum is: "+result);
}
function passiveResult(result){
  console.log("sum result is: "+result);
}

sum(1,2,passiveResult)  