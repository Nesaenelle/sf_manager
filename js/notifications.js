(function() {
    var closeBtns = document.querySelectorAll('.notification-close');
    closeBtns.forEach(r => {
        r.addEventListener('click', function() {
            this.parentNode.remove();
        }, false);
    })
}());