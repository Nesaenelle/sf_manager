(function() {

    var bannerBlock = document.querySelectorAll('#banner-block')[0];
    var moreBunnerBtn = document.querySelectorAll('#show-more-banners')[0];
    var closeBunnerBtn = document.querySelectorAll('#close-more-banners')[0];

    var copyBtn = document.querySelectorAll('#copy-link')[0];


    if (moreBunnerBtn) {

        moreBunnerBtn.addEventListener('click', function() {
            bannerBlock.classList.add('opened');
        }, false);
    }

    if (closeBunnerBtn) {

        closeBunnerBtn.addEventListener('click', function() {
            bannerBlock.classList.remove('opened');
        }, false);
    }


    if (copyBtn) {

        copyBtn.addEventListener('click', function() {
            this.classList.remove('btn-light-grey')
            this.classList.add('btn-dark-grey');
            this.innerHTML = 'Copied';
        }, false);

    }
}());