// setup for express
const express = require("express");
const app = express();


const port = 3000;

// require some data form your data.js file
let {students, instructors} = require('./data')

// just a simple middleware to show you how it works
// you will always see that console.log when you visit any page
app.use((req, res, next) => {
    console.log("Hello im the middleware");
    next();
});

// letting your middleware know where to find all static files
app.use(express.static(__dirname + "/public"));

//tell express that you are using hbs as template engine
app.set('view engine', 'hbs')
// ROUTES DEFINED BELOW

app.get("/", (req, res) => {
    // console.log(students)
    res.render(__dirname + '/views/landing.hbs', {name: "Franco", age: 21, students: students})
});

app.get("/instructors", (req, res) => {
    // console.log(instructors)
    res.render(__dirname + '/views/instructors.hbs', {name: "Franco", age: 21, instructors:instructors})
});


// Express setup to listen for all client requests on a certain port
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);