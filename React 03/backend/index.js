const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload); //here you imported the createTodo
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  //If it seems to be correct then put it in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find(); //this logs as promise todos .find needs to hit the database -> so async
  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  //this to mark a specific todo completed for non-authenticated
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id, //1st one is what do you want to update
      //any entry is identified _id in mongodb
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(3000);
//package-lock.json is for locking the version of the dependency

/*  
Dependecies are required for running the application

Dev dependencies are required for developing 
*/


/* 
fetch infinite req -> to solve this we have useEffect hook

*/