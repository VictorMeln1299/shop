let slideIndex = 1;

slideShow(slideIndex);

function currentSlide(n) {
    slideShow(slideIndex = n)
}

function nextSlide(n) {
    slideShow(slideIndex += n);
} 

function slideShow(n) {
    let slides = document.getElementsByClassName('img__container');
    let points = document.getElementsByClassName('pointMove');

    if (n < 1) {slideIndex = slides.length}
    if (n > slides.length) {slideIndex = 1}

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for(let i = 0; i < points.length; i++) {
        points[i].className = points[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    points[slideIndex - 1].className += ' active';

}