window.setInterval(async function () {
  const res = await fetch("https://sum-server.100xdevs.com/todos");
  const json = await res.json();
  console.log(json["todos"]);
  updateDomAccToState(json["todos"]);
}, 5000);

function createChild(title, description, id) {
  const outerDiv = document.createElement("div");
  const innerFirstDiv = document.createElement("div");
  const innerSecondDiv = document.createElement("div");
  const button = document.createElement("button");
  innerFirstDiv.innerHTML = title;
  innerSecondDiv.innerHTML = description;
  button.innerHTML = "Completed";
  button.setAttribute("onclick", `markAsDone(${id})`);
  outerDiv.appendChild(innerFirstDiv);
  outerDiv.appendChild(innerSecondDiv);
  outerDiv.appendChild(button);
  outerDiv.setAttribute("id", id);

  return outerDiv;
}

function updateDomAccToState(state) {
  document.getElementById("container").innerHTML = "";
  const parent = document.getElementById("container");
  parent.innerHTML = "";
  for (let i = 0; i < state.length; i++) {
    const child = createChild(
      state[i].title,
      state[i].description,
      state[i].id
    );
    parent.appendChild(child);
  }
}

function addTodo() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  document
    .getElementById("container")
    .append(createChild(title, description, globalId++));
}
