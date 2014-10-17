var socket = io.connect('http://192.168.1.122:8000');
socket.on('intro', function (data) {
  console.log(data);
  // socket.emit('do', { my: 'data' });
  socket.emit('identify', { type: 'client' })



});

var circle0,circle1,circle2
window.onload = function(){

  d3.selectAll('h1').remove()

  var svg = d3.select('div#data').append('svg')

  var w = window.innerWidth
  var h = window.innerHeight

  svg.attr('width', w)
  svg.attr('height', h)
  svg.style('background-color', 'rgb(244,244,244)')

  circle0 = svg.append('circle').attr('cx', w*0.5).attr('cy', h*0.5).attr('r', 10).attr('fill', 'red').attr('fill-opacity', 0.5)
  circle1 = svg.append('circle').attr('cx', w*0.5).attr('cy', h*0.5).attr('r', 10).attr('fill', 'green').attr('fill-opacity', 0.5)
  circle2 = svg.append('circle').attr('cx', w*0.5).attr('cy', h*0.5).attr('r', 10).attr('fill', 'blue').attr('fill-opacity', 0.5)

}

window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;

  if(socket){
    socket.emit('do', {values:[ event.absolute, event.alpha, event.beta, event.gamma ]})
  }

  circle0.attr('r', Math.abs(event.alpha))
  circle1.attr('r', Math.abs(event.beta))
  circle2.attr('r', Math.abs(event.gamma))

  // Do stuff with the new orientation data
}
