(function() {
    'use strict'

    var nameInput = document.getElementById('name');
    var gradeInput = document.getElementById('grade');

    function validate() {
        var errorSpans = document.getElementsByTagName('span');

        if (nameInput.value === "" || nameInput.value === null) {
            errorSpans[0].classList.remove('hidden');
            errorSpans[0].textContent = "The field name is mandatory.";
            return false;
        } else {
            errorSpans[0].classList.add('hidden');
        }

        if (gradeInput.value === null || gradeInput.value === "" || isNaN(gradeInput.value) || (gradeInput.value < 0 || gradeInput.value > 20)) {
            errorSpans[1].classList.remove('hidden');
            errorSpans[1].textContent = "The field grade must be an integer between 0 and 20 (inclusive)";
            return false;
        } else {
            errorSpans[1].classList.add('hidden');
        }

        return true;
    }

    function isValid() {
        var errorSpans = document.getElementsByTagName('span');

        for (var i = 0; i < errorSpans.length; ++i) {
            if (!errorSpans[i].classList.contains('hidden')) {
                return false;
            }
        }

        return true;
    }

    nameInput.addEventListener('focusout', function() {
        validate();
    });

    gradeInput.addEventListener('focusout', function() {
        validate();
    });

    document.getElementsByTagName('form')[0].addEventListener('submit', function(e) {
        if (!isValid()) {
            e.preventDefault();
        };
    }, false);

})();