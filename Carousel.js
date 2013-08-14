// Carousel.js
//
// A Scrolling Image Carousel

Carousel = function(target,images) {

	var left = 0
	target.elements = []
	for (var i = 0; i < images.length; ++i) {
		var li = document.createElement('li')
		li.appendChild(images[i])
		li.style.left = left
		left += images[i].width 
		li.width = images[i].width 
		li.style.top = -(images[i].height / 2)  + (target.offsetHeight / 2)
		target.appendChild(li)
		target.elements.push(li)	
	}
	target.delta = 0
	var carousel = function(method,x,y,button) {

		switch(method) {
		case 'down':
			target.x = x
			Hub('subscribe','move',this)
			Hub('subscribe','up',this)
			Hub('unsubscribe','down',this)
			return this
		case 'move':
			console.log("moving ", (target.x - x))
			target.delta += target.x - x
			target.delta = Math.max(0,target.delta)	
			var width = target.elements[0].width
			var offset = Math.floor(target.delta / width)
			var delta = target.delta % width
			var elements = target.elements.length
			console.log(offset,delta,elements)
			for (var i = 0; i < target.elements.length; ++i) {
				target.elements[(offset + i) % elements].style.left = i * width - delta
			}	
			target.x = x
			return this
		case 'up':
			Hub('subscribe','down',this)
			Hub('unsubscribe','up',this)
			Hub('unsubscribe','move',this)
			return this

		default:
			// ignore
			return this
		}

	}
	Hub('subscribe','down',carousel)
	return carousel

}
