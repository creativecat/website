// Warte, bis das DOM vollständig geladen ist
window.addEventListener('DOMContentLoaded', function() {
    // Holen der Elemente
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const slideCounter = document.querySelector('.slide-counter');

    let currentSlide = 0;
    const totalSlides = slides.length;

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
        
        // Aktualisiere den Folienzähler
        if (slideCounter) {
            slideCounter.textContent = `${index + 1} / ${totalSlides}`;
        }
    }

    // Nächste Folie
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Vorherige Folie
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
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
        // Space oder Enter für nächste Folie
        else if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            nextSlide();
        }
        // Home für erste Folie
        else if (event.key === 'Home') {
            event.preventDefault();
            currentSlide = 0;
            showSlide(currentSlide);
        }
        // End für letzte Folie
        else if (event.key === 'End') {
            event.preventDefault();
            currentSlide = totalSlides - 1;
            showSlide(currentSlide);
        }
    });

    // Zeige die erste Folie
    showSlide(currentSlide);

    // Optional: Automatisches Vorrücken (auskommentiert)
    // setInterval(nextSlide, 8000);
});
