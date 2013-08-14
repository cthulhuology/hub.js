Draggable = function(element) {
	var draggable =  function(method,x,y,button) {
		switch(method) {
		case 'down':
			if (! element.on(x,y)) return this
			element.dx = x - element.offsetLeft
			element.dy = y - element.offsetTop
			Hub('subscribe','move',this)
			Hub('subscribe','up',this)
			Hub('unsubscribe','down',this)
			return this
		case 'move':
			element.style.left = (x - element.dx) + 'px'
			element.style.top = (y - element.dy) + 'px'
			return this;
		case 'up':
			Hub('subscribe','down',this)	
			Hub('unsubscribe','move',this)	
			Hub('unsubscribe','up',this)	
			return this
		default:
			return this
		}
	}
	Hub('subscribe','down',draggable)
	return draggable
}
