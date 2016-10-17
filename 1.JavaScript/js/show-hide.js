(function () {
    'use strict'

    var section = document.getElementById('secret');
    var actionBar = document.getElementById('actionBar');
    var button = actionBar.getElementsByTagName('button');

    button[0].addEventListener('click', function () { section.classList.toggle('invisible'); } );
    button[1].addEventListener('mouseover', function () { section.classList.remove('invisible'); });
    button[2].addEventListener('mouseover', function () { section.classList.add('invisible'); });

}) ();
