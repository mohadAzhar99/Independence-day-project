function playAudio() {
    var audio = document.getElementById('anthem');
    audio.play();
}

function showInfo(element) {
    var infoBox = document.getElementById('info-box');
    var infoText = element.querySelector('img').getAttribute('data-info');
    infoBox.innerHTML = infoText;
    infoBox.classList.add('active');

    // Hide the info box after 5 seconds
    setTimeout(function() {
        infoBox.classList.remove('active');
    }, 5000);
}



