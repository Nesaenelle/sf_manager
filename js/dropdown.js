(function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        let valElem = dropdown.querySelector('.dropdown-value');
        let items = dropdown.querySelectorAll('.js-dropdown-item');

        valElem.addEventListener('click', function() {
            if (dropdown.classList.contains('opened')) {
                dropdown.classList.remove('opened');
            } else {
                dropdown.classList.add('opened');
            }
        }, false);

        items.forEach(r => {
            r.addEventListener('click', function() {
                items.forEach(r=> r.classList.remove('selected'));
                this.classList.add('selected');
                valElem.classList.add('dirty');
                valElem.innerHTML = this.innerHTML;
                dropdown.classList.remove('opened');
            });
        })
    });

    window.addEventListener('click', function(e) {
        dropdowns.forEach(res => {
            if (!res.contains(e.target)) {
                res.classList.remove('opened');
            }
        });
    }, false);
}());