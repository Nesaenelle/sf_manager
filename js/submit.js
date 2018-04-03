(function() {
    var notification = document.querySelectorAll('#notification-1')[0];
    var form = document.querySelectorAll('#form')[0]
    var submitBtn = document.querySelector('#submit-btn');
    var timeout;
    var formMoreBtn = document.querySelector('#form-more-btn');
    var extraFields = document.querySelector('#extra-fields');

    if (formMoreBtn) {
        formMoreBtn.addEventListener('click', function() {

            if (formMoreBtn.classList.contains('opened')) {
                formMoreBtn.classList.remove('opened');
                formMoreBtn.innerHTML = 'More';
                extraFields.classList.add('hidden');
            } else {
                formMoreBtn.classList.add('opened');
                formMoreBtn.innerHTML = 'Close';
                extraFields.classList.remove('hidden');
            }
            checkSubmitBtn();
        }, false);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var controls = form.querySelectorAll('input');
        let focusState = false;
        controls.forEach(control => {
            if (control.getAttribute('required') === '' && validate(control) === false && !focusState) {
                control.classList.add('has-error');
                control.focus();
                focusState = true;
            } else {
                control.classList.remove('has-error');
            }
        });

        if (!focusState) {
            if (notification) notification.style.display = 'flex';

            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(function() {
                if (notification) notification.style.display = 'none';
            }, 5000);
        }

    }, false);

    form.addEventListener('change', function(e) {
        checkSubmitBtn();
    });

    document.querySelectorAll('input').forEach(item => {
        item.addEventListener('input', function() {

            if (validate(this)) {
                this.setCustomValidity('');
                this.classList.remove('has-error');
            } else {
                this.setCustomValidity(this.getAttribute('title'))
                this.classList.add('has-error');
            }
        }, false);
    });

    function checkSubmitBtn() {
        var controls = [];
        var validLength = 0;
        form.querySelectorAll('input[required]').forEach(function(r) { controls.push(r) });
        form.querySelectorAll('textarea[required]').forEach(function(r) { controls.push(r) });
        controls.forEach(input => {
            if (input.validity.valid) validLength++;
        });

        if (validLength === controls.length) {
            submitBtn.classList.add('btn-green');
            submitBtn.classList.remove('btn-light-grey');
        } else {
            submitBtn.classList.remove('btn-green');
            submitBtn.classList.add('btn-light-grey');
        }
    }

    function validate(control) {
        let pattern = control.getAttribute('pattern');
        var reg = new RegExp(pattern);
        return pattern ? reg.test(control.value) : true;
    }

}());