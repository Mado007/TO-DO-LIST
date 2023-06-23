
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Todo = require("./models/todo.js");


// done add EJS
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));


//our port
const port = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://0.0.0.0:27017/todo", 
{
   useNewUrlParser: true, 
   useUnifiedTopology: true 
  }).then(() =>{ 
    console.log('MongoDB connected...')
  }).catch((err) => {
    console.log(`Error Is --> ${err}`)
});



// i made this to handle the result of the query
app.get("/", function(req, res) {
  Todo.find({})
    .then(todoList => {
      res.render("index.ejs", {todoList: todoList});
    })
    .catch(err => console.log(err));
});

// call back function with controller
     app.post("/mytodo", function(req, res) {
       console.log("item Added!");
       var newItem = new Todo ({
       name: req.body.newItem
       });
    
      newItem.save()
        .then(todo => {
          console.log("Insert Item: " + newItem);
          res.redirect("/");
        })
        .catch(err => console.log(err));
    });
    


 // Delete a todo item
app.post("/delete/:id", function(req, res) {
  Todo.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log("Item deleted!");
      res.redirect("/");
    })
    .catch(err => console.log(err));
});




// Define error handle middleware
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => {
  console.log("Server started on port" + port);
  });
