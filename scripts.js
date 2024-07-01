// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    showSection('home'); // Show the home section by default

    // Add scroll event listener to show/hide footer
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var documentHeight = document.documentElement.scrollHeight;
        var windowHeight = window.innerHeight;
        
        // Show footer when scrolled to the bottom
        if (scrollPosition + windowHeight >= documentHeight) {
            document.querySelector('footer').style.display = 'block';
        } else {
            document.querySelector('footer').style.display = 'none';
        }
    });

    // Initialize touch events for carousel
    initCarouselTouchEvents();
    updateDots();
});

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

// Carousel functionality
let currentSlideIndex = 0;

function moveSlide(direction) {
    const carousel = document.querySelector('#products .carousel');
    const items = document.querySelectorAll('#products .product-item');
    const totalItems = items.length;
    
    currentSlideIndex += direction;
    if (currentSlideIndex < 0) {
        currentSlideIndex = totalItems - 1;
    } else if (currentSlideIndex >= totalItems) {
        currentSlideIndex = 0;
    }

    carousel.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    updateDots();
}

function currentSlide(index) {
    currentSlideIndex = index;
    const carousel = document.querySelector('#products .carousel');
    carousel.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('#products .dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlideIndex].classList.add('active');
}

function initCarouselTouchEvents() {
    const carouselFrame = document.querySelector('#products .carousel-frame');
    let startX = 0;
    let endX = 0;

    carouselFrame.addEventListener('touchstart', function(event) {
        startX = event.touches[0].clientX;
    });

    carouselFrame.addEventListener('touchmove', function(event) {
        endX = event.touches[0].clientX;
    });

    carouselFrame.addEventListener('touchend', function() {
        const threshold = 50; // Minimum distance for a swipe to be considered
        if (startX - endX > threshold) {
            moveSlide(1);
        } else if (endX - startX > threshold) {
            moveSlide(-1);
        }
    });
}
