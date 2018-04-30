(function() {
    var moreBtns = document.querySelectorAll('.js-more-btn');
    if (moreBtns) {
        moreBtns.forEach(function(btn) {
            var valueBtn = btn.querySelector('.js-more-btn-opener');
            valueBtn.addEventListener('click', function() {
                moreBtns.forEach(function(r) {
                    toggleClass(r);
                });

            }, false);

            var subMenu = btn.querySelector('.js-sub-menu-toggle');
            if (subMenu) {
                subMenu.addEventListener('click', function() {
                    if(this.parentNode.classList.contains('opened')) {
                        this.parentNode.classList.remove('opened');
                        this.classList.remove('opened');
                    } else {
                        this.parentNode.classList.add('opened');
                        this.classList.add('opened')
                    }
                }, false);
            }
        });
    }

    function toggleClass(btn) {
        if (btn.classList.contains('opened')) {
            btn.classList.remove('opened');
            if(btn.querySelector('.js-more-btn-value')) btn.querySelector('.js-more-btn-value').innerHTML = 'More'
        } else {
            btn.classList.add('opened');
            if(btn.querySelector('.js-more-btn-value')) btn.querySelector('.js-more-btn-value').innerHTML = 'Close'
        }
    }


    window.addEventListener('click', function(e) {
        moreBtns.forEach(function(res) {
            if (!res.contains(e.target)) {
                res.classList.remove('opened');
                if(res.querySelector('.js-more-btn-value')) res.querySelector('.js-more-btn-value').innerHTML = 'More';
            }
        });
    }, false);
}());