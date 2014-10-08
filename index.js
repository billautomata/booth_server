var express = require('express')
var exphbs  = require('express-handlebars')

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

app.engine('handlebars', exphbs( {defaultLayout: 'main'} ));
app.set('view engine', 'handlebars');

// set up all the routes
require('./routes/route_index.js')(app)

// set up socket.io
io.on('connection', function(socket){

  console.log('connection')
  socket.emit('intro', {yep: 1})

})
