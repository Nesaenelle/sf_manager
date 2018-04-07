(function() {
    var activeBtns = document.querySelectorAll('.js-expand-table-item');
    if (activeBtns.length) {
    	activeBtns.forEach(function(btn){
    		
	        btn.addEventListener('click', function() {
	            var id = this.getAttribute('data-id');
	            var content = document.querySelector('.js-expand-table-content[data-id="'+id+'"]');

	            if(content.offsetParent) {
	            	content.classList.add('hidden');
	            } else {
	            	content.classList.remove('hidden');
	            }
	        
	        }, false);
    	});
    }
}());