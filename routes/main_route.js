module.exports.home = function(req, res, next){
  res.render('home');
}

module.exports.about = function(req, res, next){
  res.render('about')
}

module.exports.client = function(req, res, next){
  res.render('client')
}
module.exports.server = function(req, res, next){
  res.render('server')
}
