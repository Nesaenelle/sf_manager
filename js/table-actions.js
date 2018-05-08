(function() {
    var index = 0;
    var deleteBtn = document.querySelector('#delete-btn');
    var table = document.querySelectorAll('.js-table-actions')[0];
    var createBtns = document.querySelectorAll('.create-new-group');
    var groupsContainer = document.querySelector('#groups-container');
    var chexboxes = table.querySelectorAll('.checkbox[data-table-checkbox]');
    var newGroupTpl = document.querySelector('#site-group-tpl');

    chexboxes.forEach(function(checkbox) {
        checkbox.setAttribute('for', 'cb-' + index);
        checkbox.querySelector('input').setAttribute('id', 'cb-' + index);
        index++;

        checkbox.addEventListener('change', function() {

            var mainCheckbox = this.querySelector('input[data-main-checkbox]');
            var curInput = this.querySelector('input');

            curInput.checked ? curInput.checked = true : curInput.checked = false;

            if (mainCheckbox) {
                if (mainCheckbox.checked) {
                    chexboxes.forEach(function(cb) {
                        var input = cb.querySelector('input');
                        input.checked = true;
                    });
                } else {
                    chexboxes.forEach(function(cb) {
                        var input = cb.querySelector('input');
                        input.checked = false;
                    });
                }
            }
            showDelete();
        }, false);
    });

    deleteBtn.addEventListener('click', function() {

        if (confirm("Are you sure?")) {
            var inputs = table.querySelectorAll('[data-table-checkbox] input:checked');
            if (inputs.length) {
                inputs.forEach(function(input) {
                    if (!input.getAttribute('data-main-checkbox')) {
                        var tr = window.SFManager.closest(input, 'tr');
                        tr.remove();
                    }
                });
                //update checkboxes
                chexboxes = table.querySelectorAll('.checkbox[data-table-checkbox]');
                showDelete();
            }
        } else {

        }

    }, false);



    createBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {


            var checkboxes = window.SFManager.closest(this, 'ul').querySelectorAll('input:checked');
            if (checkboxes.length) {
                var tr = window.SFManager.closest(this, 'tr');
                var tpl = newGroupTpl.querySelector('tr').cloneNode(true);
                tpl.removeAttribute('id');
                tpl.querySelector('.new-table__group-name').innerHTML = checkboxes[0].value;
                tr.parentNode.insertBefore(tpl, tr);

                tpl.querySelector('.js-remove-group').addEventListener('click', function() {
                    tpl.remove();
                }, false);

                tpl.querySelector('.js-rename-group').addEventListener('click', function() {
                    tpl.querySelector('.new-table__group-name').setAttribute('contenteditable', true);
                }, false);
            }

        }, false);
    });

    function showDelete() {
        var checked = [];
        chexboxes.forEach(function(cb) {
            var input = cb.querySelector('input');
            if (input.checked && !input.getAttribute('data-main-checkbox')) {
                checked.push(input);
            }
        });

        if (checked.length) {
            deleteBtn.classList.remove('hidden');
        } else {
            deleteBtn.classList.add('hidden');
        }
    }


    document.querySelectorAll('.js-post-remove-group').forEach(function(btn) {
        btn.addEventListener('click', function() {
            window.SFManager.closest(this, 'tr').remove();
        }, false);
    });
    

}());