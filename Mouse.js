// Mouse.js
// 
// Manages mouse events, requires Hub.js & Screen.js beloaded first
// 

Mouse = function(e) {
	switch(e.type) {
		case 'mousedown':
			Hub('down', e.clientX, e.clientY, e.button)
			break
		case 'mousemove': 
			Hub('move', e.clientX, e.clientY)
			break
		case 'mouseup':
			Hub('up', e.clientX, e.clientY, e.button)
			break
		default:
			// ignore this type of event
	}
}

document.addEventListener('mousedown',Mouse,false)
document.addEventListener('mousemove',Mouse,false)
document.addEventListener('mouseup',Mouse,false)
