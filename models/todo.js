const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define task schema and model
const todoSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

// Create a model for the To-Do list items
const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;


