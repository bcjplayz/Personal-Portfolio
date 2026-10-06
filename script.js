const slides = document.querySelectorAll('.persona-slide');
const previousButton = document.querySelector('#previous-slide');
const nextButton = document.querySelector('#next-slide');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

previousButton.addEventListener('click', () => showSlide(currentSlide - 1));
nextButton.addEventListener('click', () => showSlide(currentSlide + 1));