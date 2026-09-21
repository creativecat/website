// Warte, bis das DOM vollständig geladen ist
window.addEventListener('DOMContentLoaded', function() {
    // Holen der Elemente
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentSlide = 0;

    // Funktion zum Anzeigen der aktuellen Folie
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
                
                // Animation für die Elemente auf der Folie
                const animatedElements = slide.querySelectorAll('.animated');
                animatedElements.forEach((element, delayIndex) => {
                    element.style.animationDelay = `${delayIndex * 0.2}s`;
                });
            }
        });
    }

    // Nächste Folie
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Vorherige Folie
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event-Listener für die Navigation
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Tastatursteuerung
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            nextSlide();
        } else if (event.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    // Zeige die erste Folie
    showSlide(currentSlide);
});
