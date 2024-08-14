document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, 5000);

    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseover', () => {
        clearInterval(autoSlide);
    });

    carouselContainer.addEventListener('mouseout', () => {
        autoSlide = setInterval(nextSlide, 5000);
    });

    let autoSlide = setInterval(nextSlide, 5000);
});