var socket = io.connect(window.location.host);

socket.on('intro', function (data) {

  console.log(data);
  // socket.emit('do', { my: 'data' });

  socket.emit('identify', { type: 'server' })

});

var circle0,circle1,circle2

socket.on('datagram', function(d){

  console.log(d.values.join('\t'))

  circle0.attr('r', Math.abs(d.values[1]))
  circle1.attr('r', Math.abs(d.values[2]))
  circle2.attr('r', Math.abs(d.values[3]))

})


window.onload = function(){
  console.log('here')
  var svg = d3.select('div#debug_display').append('svg')

  var w = window.innerWidth
  var h = window.innerHeight

  svg.attr('width', w)
  svg.attr('height', h)
  svg.style('background-color', 'rgb(244,244,244)')

  circle0 = svg.append('circle').attr('cx', w*0.5).attr('cy', h*0.5).attr('r', 10).attr('fill', 'red').attr('fill-opacity', 0.5)
  circle1 = svg.append('circle').attr('cx', w*0.5).attr('cy', h*0.5).attr('r', 10).attr('fill', 'green').attr('fill-opacity', 0.5)
  circle2 = svg.append('circle').attr('cx', w*0.5).attr('cy', h*0.5).attr('r', 10).attr('fill', 'blue').attr('fill-opacity', 0.5)

}
