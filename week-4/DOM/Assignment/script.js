function calculateSum() {
  const principal = document.getElementById("principal").value;
  const rate = document.getElementById("interestRate").value;
  const time = document.getElementById("timeInYears").value;

  fetch(
    "https://sum-server.100xdevs.com/interest?principal=" +
      principal +
      "&rate=" +
      rate +
      "&time=" +
      time
  )
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      const data = JSON.parse(text);
      total = data["total"];
      interest = data["interest"];
      document.getElementById("total").innerHTML = `total = ${total}`;
      document.getElementById("interest").innerHTML = `interest = ${interest}`;
    })
    .catch(function (error) {
      console.error("Error fetching data:", error);
    });
}
