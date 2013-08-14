// Menu.js
//
// This can be used to create popup menus
// The menus can then send messages to things!
//

// target is the

Menu = function(target,actions) {
	var popup = document.createElement('div')
	popup.className = 'menu'
	var menu = function(method,x,y,button) {
		switch(method) {
		case 'down':
			if (button != 2) return;
			popup.style.display = 'block'
			console.log("menu")

		}
	}
	Hub('subscribe','down',menu)
	return menu
}
