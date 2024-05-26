// Create a counter in Javascript (counts down from 30 to 0)


function countDown(){
  let counter = 30
  let countDown=setInterval(()=>{
    console.log(counter)
    if(counter == 0){
      clearInterval(countDown)
      console.log("Time's up!")
    }
    counter--;
  },1*1000)
}






countDown();