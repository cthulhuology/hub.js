
Positionable = function(element) {
	element.style.position = 'absolute'
	var positionable =  function(method,x,y) {
		switch(method) {
		case 'moveTo':
			element.style.left = x 
			element.style.top = y
			return this
		case 'moveBy':
			element.style.left = element.offsetLeft + x
			element.style.top = element.offsetTop + y
			return this;
		default:
			return this
		}
	}
	Hub('subscribe','moveTo',positionable)
	Hub('subscribe','moveBy',positionable)
	return positionable
}
