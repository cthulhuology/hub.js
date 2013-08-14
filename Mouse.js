// Mouse.js
// 
// Manages mouse events, requires Hub.js & Screen.js beloaded first
// 

HTMLElement.prototype.on = function(x,y) {
		if  ( x < this.offsetLeft || x > (this.offsetLeft + this.offsetWidth) || y < this.offsetTop || y > (this.offsetTop + this.offsetHeight)) return false
		return true
}

Mouse = function(e) {
	e.preventDefault()
	e.stopPropagation()
	switch(e.type) {
		case 'mousedown':
			Hub('down', e.clientX, e.clientY, e.button)
			console.log(e.button)
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
	return false
}

document.addEventListener('mousedown',Mouse,false)
document.addEventListener('mousemove',Mouse,false)
document.addEventListener('mouseup',Mouse,false)
document.addEventListener('contextmenu',Mouse,false)
