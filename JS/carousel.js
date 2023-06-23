window.onload = start

    let imageSlides
    let circles
    let leftArrow
    let rightArrow
    let counter

function start() {
    // IMAGE SLIDES & CIRCLES ARRAYS, & COUNTER
    imageSlides = document.getElementsByClassName('imageSlides');
    circles = document.getElementsByClassName('circle');
    leftArrow = document.getElementById('leftArrow');
    rightArrow = document.getElementById('rightArrow');
    counter = 0;


// HIDE ALL IMAGES FUNCTION
    function hideImages() {
        for (let i = 0; i < imageSlides.length; i++) {
            imageSlides[i].classList.remove('reveal');
        }
    }

// REMOVE ALL DOTS FUNCTION
    function removeDots() {
        for (let i = 0; i < imageSlides.length; i++) {
            circles[i].classList.remove('dot');
        }
    }

// SINGLE IMAGE LOOP/CIRCLES FUNCTION
    function imageLoop() {
        let currentImage = imageSlides[counter];
        let currentDot = circles[counter];
        currentImage.classList.add('reveal');
        removeDots();
        currentDot.classList.add('dot');
        counter++;
    }

// LEFT & RIGHT ARROW FUNCTION & CLICK EVENT LISTENERS
    function arrowClick(e) {
        let target = e.target;
        if (target === leftArrow) {
            clearInterval(imageSlideshowInterval);
            hideImages();
            removeDots();
            if (counter === 1) {
                counter = (imageSlides.length - 1);
                imageLoop();
                imageSlideshowInterval = setInterval(slideshow, 10000);
            } else {
                counter--;
                counter--;
                imageLoop();
                imageSlideshowInterval = setInterval(slideshow, 10000);
            }
        } else if (target === rightArrow) {
            clearInterval(imageSlideshowInterval);
            hideImages();
            removeDots();
            if (counter === imageSlides.length) {
                counter = 0;
                imageLoop();
                imageSlideshowInterval = setInterval(slideshow, 10000);
            } else {
                imageLoop();
                imageSlideshowInterval = setInterval(slideshow, 10000);
            }
        }
    }

    leftArrow.addEventListener('click', arrowClick);
    rightArrow.addEventListener('click', arrowClick);


// IMAGE SLIDE FUNCTION
    function slideshow() {
        if (counter < imageSlides.length) {
            imageLoop();
        } else {
            counter = 0;
            hideImages();
            imageLoop();
        }
    }

// SHOW FIRST IMAGE, & THEN SET & CALL SLIDE INTERVAL
    setTimeout(slideshow, 1000);
    let imageSlideshowInterval = setInterval(slideshow, 10000);
}