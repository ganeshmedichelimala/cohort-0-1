

// function buttonClick() {
//   let a = document.getElementById("firstNumber").value;
//   let b = document.getElementById("secondNumber").value;
//   const firstIntNumber = parseInt(a);
//   const secondIntNumber = parseInt(b);
//   const res = fetch(
//     "https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b
//   ).then(function (response) {
//     response.text().then(function (ans) {
//       console.log(ans);
//       document.getElementById("result").innerHTML = `Sum is :${ans}`;
//     });
//   });
// }


async function buttonClick(){
  const a = document.getElementById("firstNumber").value;
  const b = document.getElementById("secondNumber").value;
  const response = await fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b)
  const ans = await response.text()
  document.getElementById("result").innerHTML = `Sum is :${ans}`;
}
