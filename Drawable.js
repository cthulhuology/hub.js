// Drawable controls the visibility of the element on the page

Drawable = function(element) {
	element.style.display = 'none'
	var drawable = function(method) {
		switch(method) {
		case 'show':
			element.style.display = 'block'
			Hub('subscribe','draw',this)
			return this
		case 'hide':
			element.style.display = 'none'
			Hub('unsubscribe','draw',this)
			return this
		case 'draw':
			if (typeof(element.render) != 'function') return;
			element.render()
			return this
		default:
			// ignore
			return this
		}
	}

	return drawable
}	

var onFrame = (function(){
	return window.requestAnimationFrame	||
	window.webkitRequestAnimationFrame	||
	window.mozRequestAnimationFrame		||
	function( callback ){
		window.setTimeout(callback, 1000 / 60);
	};
})();

console.log(onFrame)

function render() {
	Hub('draw')
	onFrame(render)
}

onFrame(render)

