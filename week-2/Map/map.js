// given an array, give me an array where every value is multiplied by 2



// normal way to do it 
const input = [1,2,3,4,5]
const newArray  = []
for(let i = 0; i < input.length ; i++){
  newArray.push(input[i]*2)
}

console.log(newArray)



//using map function 1 type
function multiplyBy2(i){
  return i*2
}
const ans = input.map(multiplyBy2)
console.log(ans)


//using map function type 2 
const ans2 = input.map((i)=>{
  return i*2;
})

console.log(ans2)
