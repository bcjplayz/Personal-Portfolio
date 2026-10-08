const slides = document.querySelectorAll('.persona-slide');
const nextButton = document.querySelector('#next-slide');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

nextButton.addEventListener('click', () => showSlide(currentSlide + 1));