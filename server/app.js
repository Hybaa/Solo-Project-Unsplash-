const express = require("express");
const cors = require("cors");

//Create an Express App
const app = express();

//Middleware to parse incoming requests with JSON and urlencoded payloads
app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.use(cors());


//Require application Route modules
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');

app.use('/api/users', usersRoute);
app.use('/api/posts', postsRoute);


app.get("/", (req, res) => {
    res.send("Hello from the server!");
  });


module.exports = app;