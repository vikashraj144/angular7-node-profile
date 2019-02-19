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

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));
console.log('Express server is listening on port: ' + app.get('port'));
module.exports = app;