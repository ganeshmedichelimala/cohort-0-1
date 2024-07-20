// write basics express boilerplate code
// with express.json() middleware

const express = require("express");
const { createTodo } = require("./types");
const { updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors())

app.post("/todos", async (req, res) => {
  const createPayLoad = req.body;
  const parsedPayLoad = createTodo.safeParse(createPayLoad);
  console.log(parsedPayLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({
      msg: "You sent a wrong inputs",
    });
    return;
  }
  //put it in mongoDB
  await todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });
  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayLoad = req.body;
  const parsedPayLoad = updateTodo.safeParse(updateTodo);
  if (updatePayLoad.success) {
    res.status(411).json({
      msg: "You sent wrong inputs",
    });
    return;
  }
  //put it in mongoDB
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg : "Todo marked as completed"
  })
});

app.listen(3000, () => console.log("3000"));
