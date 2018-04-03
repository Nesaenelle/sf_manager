(function() {

	var checkbox = document.querySelector('#checkbox');
	var textarea = document.querySelector('#textarea');
	var input = document.querySelector('#input');
	var moreBtn = document.querySelector('#more-btn');
	var form = document.querySelector('#form');
// .setCustomValidity('')
	checkbox.addEventListener('change', function () {
		if(this.checked){
			textarea.classList.remove('hidden');
			textarea.querySelector('textarea').setAttribute('required', true)
			input.querySelector('input').removeAttribute('required')
			input.classList.add('hidden');
		} else {
			textarea.classList.add('hidden');
			textarea.querySelector('textarea').removeAttribute('required')
			input.querySelector('inut').setAttribute('required', true)
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