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

    // Initialize the carousel
    initCarousel();
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
let currentIndex = 0;
const items = document.querySelectorAll('#products .product-item');
const totalItems = items.length;

function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }
    updateCarousel();
}

function currentSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector('#products .carousel');
    const itemWidth = items[0].offsetWidth; // Get the width of one product item
    const transformValue = -currentIndex * itemWidth + 'px';
    carousel.style.transform = `translateX(${transformValue})`;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('#products .dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function initCarousel() {
    const dotsContainer = document.querySelector('#products .carousel-dots');

    // Remove existing dots
    dotsContainer.innerHTML = '';

    // Generate dots based on the number of items
    items.forEach((item, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => currentSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Initialize touch events for carousel
    initCarouselTouchEvents();
    updateDots();
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
