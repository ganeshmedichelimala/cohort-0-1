const arr = [-1,-2,-3,-4,-5,-6,-7]
let largestElement = arr[0]
for(let i=0; i<arr.length; i++){
  if(arr[i]> largestElement){
    largestElement = arr[i]
  }
}
console.log(largestElement)