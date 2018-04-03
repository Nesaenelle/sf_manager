(function() {
    var receiveBtn = document.querySelectorAll('#receive')[0];
    if (receiveBtn) {
        receiveBtn.addEventListener('click', function() {
            this.classList.add('btn-dark-grey');
            this.classList.remove('btn-light-grey');
            this.innerHTML = 'Received';
        }, false);
    }
}());