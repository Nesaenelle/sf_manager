(function() {
    var index = 0;
    var deleteBtn = document.querySelector('#delete-btn');
    var tables = document.querySelectorAll('.js-table-actions');
    var createBtn = document.querySelector('#create-new-group');
    var groupsContainer = document.querySelector('#groups-container');

    if (tables.length) {
        tables.forEach(function(table) {
            var chexboxes = table.querySelectorAll('.checkbox[data-table-checkbox]');

            chexboxes.forEach(function(checkbox) {
                checkbox.setAttribute('for', 'cb-' + index);
                checkbox.querySelector('input').setAttribute('id', 'cb-' + index);
                index++;

                checkbox.addEventListener('change', function() {
                    var checked = [];
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

                    chexboxes.forEach(function(cb) {
                        var input = cb.querySelector('input');
                        if (input.checked) {
                            checked.push(input);
                        }
                    });

                    if (checked.length) {
                        deleteBtn.classList.remove('hidden');
                    } else {
                        deleteBtn.classList.add('hidden');
                    }
                }, false);
            });


        });
    }

    deleteBtn.addEventListener('click', function() {

        if (confirm("Are you sure?")) {

        } else {

        }

    }, false);

    createBtn.addEventListener('click', function() {
        var chexboxes = tables[0].querySelectorAll('[data-table-checkbox] input:checked');
        var template = document.createElement('table');
        template.className = 'new-table  websites-list';
        template.innerHTML = '<tbody></tbody>';

        if (chexboxes.length) {
            chexboxes.forEach(function(cb) {
                var tr = closest(cb, 'tr').cloneNode(true);
                template.querySelector('tbody').appendChild(tr);
            });
            
            groupsContainer.appendChild(template);
        }

    }, false);


    function closest(el, selector) {
        var matchesFn;

        // find vendor prefix
        ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function(fn) {
            if (typeof document.body[fn] == 'function') {
                matchesFn = fn;
                return true;
            }
            return false;
        })

        var parent;

        // traverse parents
        while (el) {
            parent = el.parentElement;
            if (parent && parent[matchesFn](selector)) {
                return parent;
            }
            el = parent;
        }

        return null;
    }

}());