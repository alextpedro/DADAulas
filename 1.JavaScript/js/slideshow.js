(function () {
    'use strict'

    function init(folderName, lastIndex) {
        var imageArray = [];
        var currentIndex = 1;
        var buttonPrevious = document.getElementById('previous');
        var buttonNext = document.getElementById('next');
        var buttonStop = document.getElementById('stop');
        var buttonRestart = document.getElementById('restart');
        var timer;

        function setImage(index) {
            document.getElementById('slider').src = imageArray[index];
        }

        for (var i = 1; i < lastIndex + 1; i++) {
            imageArray[i] = folderName+"/img-"+ (i) +".jpeg";
        }

        function previousImage() {
            if (currentIndex > 1) {
                currentIndex--;
                setImage(currentIndex);
            }
        }

        function nextImage() {
            if (currentIndex < lastIndex) {
                currentIndex++;
                setImage(currentIndex);
            }
        }

        function startTimer() {
            setImage(1);
            timer = setInterval(function () { nextImage() }, 2000)
        }

        function stopTimer() {
            clearInterval(timer);
        }

        buttonPrevious.addEventListener('click', previousImage);
        buttonNext.addEventListener('click', nextImage);
        buttonStop.addEventListener('click', stopTimer);
        buttonRestart.addEventListener('click', startTimer);

        startTimer();
    }

    init("slide_img", 13);
    
}) ();