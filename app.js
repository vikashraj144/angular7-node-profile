var express = require('express');
const http = require('http');
const dotenv = require('dotenv').config({path:'./server/.env'})
require('./server/config/knex')(app);

// let config = require('config'); //load the db location from the JSON files

var app = express();

app.get('/',(req,res) => {
    res.json({
        message:'This is you route api.'
    })
})

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

//Create Server
var server  = http.createServer(app);
// Routes Initialization
var routes = require('./server/routes');
app.use('/', routes)
server.listen(process.env.PORT || 3000, () => { console.log(`Server is listening on port -> ${process.env.PORT || 3000}`); })