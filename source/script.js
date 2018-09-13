'use strict';

var image = document.querySelector('.image');

image.addEventListener('mousedown', function(evt) {
  evt.preventDefault();
  
  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };
  
  var mouseMoveHandler = function(moveEvt) {
    moveEvt.preventDefault();
    
    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };
    
    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };
    
    image.style.top = (image.offsetTop - shift.y) + 'px';
    image.style.left = (image.offsetLeft - shift.x) + 'px';
  };
  
  var mouseUpHandler = function(upEvt) {
    upEvt.preventDefault();
    
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };
  
  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);
});