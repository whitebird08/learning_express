var express = require('express'),
  app = express();

var vegetables = [
        "Carrots",
        "Cucumber",
        "Peas"
         ];
/////
// WHEN the app loads for the first time, register "ejs" as the templating language
// http://www.embeddedjs.com/
app.set('view engine', 'ejs');

// WHEN a user visits the homepage
app.get('/', function(req, res){
  // THEN read the file named index.ejs, and do some text replacing
  // such that <%= name %> becomes "Elie"
  res.render('index', {name: "Elie"});
});

// WHEN a user goes to the homepage
app.get("/", function (req, res) {
  // THEN send back a response with "Hello World"
  res.send("Hello World");
});

app.get("/hello/:name", function (req, res) {
  res.send( "Hello, " + req.params.name );
});

// WHEN a user goes to http://localhost:3000/vegetables 
app.get("/vegetables", function (req, res) {
  //THEN send back a response with the veggies
  res.send(vegetables.join(", "));
});

// WHEN a users goes to the /meaning-of-life path
app.get("/meaning-of-life", function (req, res) {
  // THEN send down a response with "42"
  res.send("42");
});


app.listen(3000, function () {
  console.log("Go to localhost:3000/");
});
  
