(function() {

    var inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input=>{
        input.nextElementSibling.querySelector('.input-number-plus').addEventListener('click', function() {
            input.value = +input.value + 1;
        }, false);
        input.nextElementSibling.querySelector('.input-number-minus').addEventListener('click', function() {
            if(input.value > 0) {
                input.value = +input.value - 1;
            } else {
                input.value = 0;
            }
        }, false);
    });
}());