(function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        let valElem = dropdown.querySelector('.dropdown-value');
        let items = dropdown.querySelectorAll('.dropdown-list-item');

        valElem.addEventListener('click', function() {
            if (dropdown.classList.contains('opened')) {
                dropdown.classList.remove('opened');
            } else {
                dropdown.classList.add('opened');
            }
        }, false);
    });

    window.addEventListener('click', function(e) {
        dropdowns.forEach(res => {
            if (!res.contains(e.target)) {
                res.classList.remove('opened');
            }
        });
    }, false);
}());