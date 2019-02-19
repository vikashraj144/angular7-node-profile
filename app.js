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

//Create Server
var server  = http.createServer(app);
// Routes Initialization
var routes = require('./server/routes');
app.use('/', routes)
server.listen(process.env.PORT || 3000, () => { console.log(`Server is listening on port -> ${process.env.PORT || 3000}`); })