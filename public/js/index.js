var socket = io.connect(window.location.host);
socket.on('intro', function (data) {
  console.log(data);
  socket.emit('do', { my: 'data' });
});


window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;

  if(socket){
    socket.emit('do', {values:[ event.absolute, event.alpha, event.beta, event.gamma ]})
  }

  // Do stuff with the new orientation data
}
