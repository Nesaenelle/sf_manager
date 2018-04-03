(function() {

	var checkbox = document.querySelector('#checkbox');
	var textarea = document.querySelector('#textarea');
	var input = document.querySelector('#input');
	var moreBtn = document.querySelector('#more-btn');
	var form = document.querySelector('#form');

	checkbox.addEventListener('change', function () {
		if(this.checked){
			textarea.classList.remove('hidden');
			input.classList.add('hidden');
		} else {
			textarea.classList.add('hidden');
			input.classList.remove('hidden');
		}
	}, false);

	var subMenu = document.querySelector('#js-menu-toggle');
	if (subMenu) {
	    subMenu.addEventListener('click', function() {
	    	this.nextElementSibling.classList.remove('hidden');
	    }, false);
	}

}());