(function() {
    var items = document.querySelectorAll('.js-accordion-item');

    items.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            if (this.parentNode.classList.contains('opened')) {
                this.parentNode.classList.remove('opened');
            } else {
                this.parentNode.classList.add('opened');
            }
        }, false);
    });
}());