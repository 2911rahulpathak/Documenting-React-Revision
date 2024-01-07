const mongoose = require("mongoose");

//mongodb url handy
mongoose.connect("mongodb+srv://admin:123admin@cluster0.sgj7wka.mongodb.net/");

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
