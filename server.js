const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');


var app = express()
// bodyparser Middle ware
app.use(bodyParse.json())

// DB config
const db = require('./config/keys').mongoURI
// Connect to Mongo
mongoose
.connect(db)
.then(()=> console.log('MongoDB connect to database successfull')) 
.catch(err => console.log('error not connect to database'))

// create variable item from items.js
const item = require('./routes/api/items')
// any request goes api/items
// use routes from api/items
app.use('/api/items', item)

app.get('/', function(req, res){
    res.send('hello world')
    
})

const port = process.env.port || 5000
app.listen(port, ()=> console.log(` Server started on port ${port}`))


// app.listen(3000, function(){
//     console.log('listening server')
// })
