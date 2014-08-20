var express = require('express')
var exphbs  = require('express-handlebars')

var port = process.env.PORT || 8000

// initalize the server
var app = express()
app.engine('handlebars', exphbs( {defaultLayout: 'main'} ));
app.set('view engine', 'handlebars');

// set up all the routes
require('./routes/route_index.js')(app)

// start the server
app.listen(port, function(err){
  if(err){ console.log(err) }
  console.log('Listening on port ' + port)
})
