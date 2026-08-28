window.addEventListener('load', () => {
    const imageSlides = document.getElementsByClassName('imageSlides');
    const circles = document.getElementsByClassName('circle');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');

    if (!imageSlides.length || circles.length < imageSlides.length || !leftArrow || !rightArrow) {
        return;
    }

    let currentIndex = 0;

    function showSlide(index) {
        currentIndex = (index + imageSlides.length) % imageSlides.length;

        for (let i = 0; i < imageSlides.length; i++) {
            imageSlides[i].classList.toggle('reveal', i === currentIndex);
            circles[i].classList.toggle('dot', i === currentIndex);
        }
    }

    showSlide(0);
    let imageSlideshowInterval = setInterval(() => showSlide(currentIndex + 1), 4000);

    function moveSlide(step) {
        clearInterval(imageSlideshowInterval);
        showSlide(currentIndex + step);
        imageSlideshowInterval = setInterval(() => showSlide(currentIndex + 1), 4000);
    }

    leftArrow.addEventListener('click', () => moveSlide(-1));
    rightArrow.addEventListener('click', () => moveSlide(1));
});