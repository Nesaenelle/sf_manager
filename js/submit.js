(function() {
    var notification = document.querySelectorAll('#notification-1')[0];
    var form = document.querySelectorAll('#form')[0]
    var submitBtn = document.querySelector('#submit-btn');
    var timeout;
    var formMoreBtn = document.querySelector('#form-more-btn');
    var extraFields = document.querySelector('#extra-fields');
    var extraTPl;


    addListenersToControls();

    if (formMoreBtn) {
        $.ajax({
            type: 'get',
            url: 'tpl/create-website.tpl',
            success: function(tpl){
                extraTPl = tpl;
                addListenersToControls();
            }
        });
        formMoreBtn.addEventListener('click', function() {

            if (formMoreBtn.classList.contains('opened')) {
                formMoreBtn.classList.remove('opened');
                formMoreBtn.innerHTML = 'More';
                extraFields.innerHTML = '';
            } else {
                formMoreBtn.classList.add('opened');
                formMoreBtn.innerHTML = 'Close';
                extraFields.innerHTML = extraTPl;
                addListenersToControls();
            }
            checkSubmitBtn();
        }, false);
    }


    form.addEventListener('change', function(e) {
        checkSubmitBtn();
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var controls = getControls(form);
        var focusState = false;
        controls.forEach(function(control) {
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

    function addListenersToControls () {
        document.querySelectorAll('input').forEach(function(item) {
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
    }

    function checkSubmitBtn() {
        var controls = getControls(form);
        var validLength = 0;
        controls.forEach(function(input) {
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

    function getControls(form) {
        var controls = [];
        form.querySelectorAll('input[required]').forEach(function(r) { if(r.offsetParent) controls.push(r) });
        form.querySelectorAll('textarea[required]').forEach(function(r) { if(r.offsetParent) controls.push(r) });
        return controls;
    }

    function validate(control) {
        var pattern = control.getAttribute('pattern');
        var reg = new RegExp(pattern);
        return pattern ? reg.test(control.value) : true;
    }

}());