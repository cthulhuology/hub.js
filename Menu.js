// Menu.js
//
// This can be used to create popup menus
// The menus can then send messages to things!
//

// target is the

Menu = function(target,actions) {
	var popup = document.createElement('ul')
	popup.className = 'menu'
	popup.style.position = 'absolute'
	popup.style.display = 'block'
	popup.style.visibility = 'hidden'
	for (var i = 0; i < actions.length; ++i) {
		var li = document.createElement('li')
		li.className = 'menuItem'
		li.innerHTML = actions[i][0]
		popup.appendChild(li)
	}
	document.body.appendChild(popup)

	var menu = function(method,x,y,button) {
		switch(method) {
		case 'down':
			if (!target.on(x,y)) return;
			if (button != 2) return;
			console.log("menu")
			popup.x = popup.style.left = x
			popup.y = popup.style.top = y
			popup.style.visibility = 'visible'
			return this
		case 'up':
			popup.style.visibility = 'hidden'
			console.log(popup)
			var item = actions[Math.floor(( y - popup.y) / (popup.offsetHeight/actions.length))]
			console.log("Sending ", item[1], "message", item[2])
			item[1].resend(item[2])
			return this
		default:
			return this
		}
	}
	Hub('subscribe','down',menu)
	Hub('subscribe','up',menu)
	return menu
}
