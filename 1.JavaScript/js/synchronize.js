(function () {
    'use strict'

    var nameOutput = document.getElementById('nameOutput');
    var nameInput = document.getElementById('name');
    var gradeOutput = document.getElementById('gradeOutput');
    var gradeInput = document.getElementById('grade');
    var periodOutput = document.getElementById('periodOutput');
    var periodInput = document.getElementById('period');

    nameInput.addEventListener('focusout', function () {
        nameOutput.innerHTML = nameInput.value;
    });

    gradeInput.addEventListener('input', function () {
        gradeOutput.innerHTML = gradeInput.value;
    });

    periodInput.addEventListener('input', function () {
        periodOutput.innerHTML = periodInput.value;
    });
    
}) ();