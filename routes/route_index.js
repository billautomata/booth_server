var express = require('express')

var main_route = require('./main_route.js')
var test_route = require('./test_route.js')

module.exports = function(app){

  // static routes
  app.use('/public', express.static('./public'))

  // sections
  app.get('/test', test_route.home)
  app.get('/about', main_route.about)

  // home
  app.get('/', main_route.home)

  // error handlers
  app.use(function(req,res,next){
    console.log('sending 404')
    res.status(404)
    res.render('404')
  })

  app.use(function(err,req,res,next){
    console.log(err.stack)
    res.status(500)
    res.render('500')
  })

}
