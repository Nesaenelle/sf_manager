(function() {
    var btns = document.querySelectorAll('.js-modal-btn');
    var modal = document.querySelector('#modal');

    btns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            modal.classList.remove('hidden');
        }, false);
    });

    window.addEventListener('click', function(e) {
        if (!modal.querySelector('.modal__content').contains(e.target)) {
            modal.classList.add('hidden');
        }
    }, false);
}());