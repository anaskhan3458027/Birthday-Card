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
