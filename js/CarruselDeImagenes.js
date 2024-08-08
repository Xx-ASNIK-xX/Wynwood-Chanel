let slideIndex = 0;

function showSlide(index) {
    const slides = document.getElementsByClassName('carousel-item');
    const totalSlides = slides.length;
    
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    for (let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove('active');
    }
    slides[slideIndex].classList.add('active');
    
    document.querySelector('.carousel-inner').style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});
	
 

