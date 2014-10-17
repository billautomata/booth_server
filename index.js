var express = require('express')
var exphbs  = require('express-handlebars')

var util = require('util')

var port = process.env.PORT || 8000

// initalize the server
var app = express()

var server = require('http').Server(app)

// start the server
var server = app.listen(port, function(err){
  if(err){ console.log(err) }
  console.log('Listening on port ' + port)
})
var io = require('socket.io')(server)

// use handlebars
app.engine('handlebars', exphbs( {defaultLayout: 'main'} ));
app.set('view engine', 'handlebars');

// set up all the routes
require('./routes/route_index.js')(app)

var connections = []

setInterval(function(){ console.log(connections.length)},1000)

// set up socket.io
io.on('connection', function(socket){



  console.log('connection')
  socket.emit('intro', {v:1})

  socket.on('identify', function(d){
    console.log(d)

    if(d.type && d.type === 'server'){
      socket.type = 'server'
    } else {
      socket.type = 'client'
    }

    connections.push(socket)

    socket.on('disconnect', function(){
      console.log('got a disconnect of type ', socket.type)
      connections.splice(connections.indexOf(socket),1)
      console.log('connections size : ' + connections.length)
    })

  })

  socket.on('do', function(d){

    connections.forEach(function(connection){

      if(connection.type === 'server'){
        connection.emit('datagram', d)
      }

    })
    
  })

})
