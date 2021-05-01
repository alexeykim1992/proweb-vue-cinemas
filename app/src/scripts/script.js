let video = document.querySelector('.main-poster__video');

video.muted = true;
window.addEventListener('scroll', function () {
    if (window.pageYOffset >= 700) {
        video.play();
    } else {
        video.pause();
    }
})