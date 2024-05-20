document.addEventListener('DOMContentLoaded', () => {
    const carouselContent = document.querySelector('.carousel-content');
    const leftButton = document.querySelector('.carousel-button.left');
    const rightButton = document.querySelector('.carousel-button.right');

    let currentIndex = 0;

    leftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    rightButton.addEventListener('click', () => {
        if (currentIndex < carouselContent.children.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselContent.style.transform = `translateX(${offset}%)`;
    }
});
