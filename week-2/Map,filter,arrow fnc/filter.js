// what if i tell you given an input array give me all the even values from it 



//normal way to do it
const array = [1,2,3,4,5]
const newArray = []
for(let i = 0 ; i < array.length; i++){
  if(array[i]%2 ==0){
    newArray.push(array[i])
  }
}

console.log(newArray)



//using filter function 
function fitlerLogic(n){
  if(n % 2 == 0){
    return true
  }else{
    return false
  }
}

const ans = array.filter(fitlerLogic)
console.log(ans)


//using filter type 2 defining function in it (arrow function)
const ans2 = array.filter((n)=>{
  return (n % 2 == 0)? true : false
})
console.log(ans2)