//mongoose is the library we are using to connect to the database
const mongoose = require("mongoose");
// mongodb+srv://admin:123admin@cluster0.sgj7wka.mongodb.net/

mongoose.connect("mongodb+srv://admin:123admin@cluster0.sgj7wka.mongodb.net/");
//create a schema
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

//last thing to do is model
const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
