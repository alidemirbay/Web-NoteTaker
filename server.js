//imports dependecies
var express = require("express");

//sets up express app
var app = express();

var PORT = process.env.PORT || 3000;

// parses incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serves static files
app.use(express.static("public"));


// immports html and api routes
require('./routes/apiRoute')(app);
require('./routes/htmlRoute')(app);

//starts the server listening port
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});