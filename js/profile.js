(function() {
    var passBtn = document.querySelectorAll('#change-password-btn')[0];
    var changePassForm = document.querySelectorAll('#change-password-form')[0]
    var passwordReadonly = document.querySelectorAll('#password-readonly')[0]
    var passwordSubmitBtn = document.querySelectorAll('#password-btn')[0];

    var passNotification = document.querySelectorAll('#notification-2')[0];
    var errorNotification = document.querySelectorAll('#notification-3')[0];
    var errorNotificationValue = errorNotification.querySelectorAll('.notification-error-value')[0];


    var newPassInput = document.querySelectorAll('#new-password-control')[0];
    var newPassRepeatInput = document.querySelectorAll('#new-password-repeat')[0];

    passBtn.addEventListener('click', function(e) {
        changePassForm.style.display = 'block';
        passwordReadonly.style.display = 'none';
        changePassForm.querySelectorAll('input')[0].focus();
        changePassForm.querySelectorAll('input').forEach(function(r){ r.value = ''});
    }, false);

    passwordSubmitBtn.addEventListener('click', function(e) {
        var controls = changePassForm.querySelectorAll('input');
        var focusState = false;

        controls.forEach(function(control) {
            if (validate(control) === false && !focusState) {
                control.classList.add('has-error');
                control.focus();
                focusState = true;
                errorNotification.style.display = 'flex';
                errorNotificationValue.innerHTML = control.getAttribute('title');
            }
        });

        if (!focusState) {
            if (newPassInput.value === newPassRepeatInput.value) {
                passNotification.style.display = 'flex';
                changePassForm.style.display = 'none';
                passwordReadonly.style.display = 'flex';
                errorNotification.style.display = 'none';
            } else {
                errorNotificationValue.innerHTML = 'Passwords must be the same';
            }
        }

    }, false);

    changePassForm.querySelectorAll('input').forEach(function(item) {
        item.addEventListener('input', function(e) {
            e.stopPropagation();
            e.preventDefault();
            var control = this;
            if (validate(this) === false) {
                control.classList.add('has-error');
                control.focus();
                focusState = true;
                errorNotification.style.display = 'flex';
                errorNotificationValue.innerHTML = control.getAttribute('title');
            } else {
                control.classList.remove('has-error');
            }

        }, false);
    });


    function validate(control) {
        var pattern = control.getAttribute('pattern');
        var reg = new RegExp(pattern);
        return pattern ? reg.test(control.value) : true;
    }
}());