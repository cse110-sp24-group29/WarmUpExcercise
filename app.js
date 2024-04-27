document.addEventListener("DOMContentLoaded", function () {
    // Define navLinks at the top so it's available to all functions
    const navLinks = document.getElementById("nav-links");
    const submitButton = document.getElementById("submit");
    const body = document.querySelector('body');

    // Hamburger menu toggle
    document.getElementById("hamburger-menu").addEventListener("click", function () {
        navLinks.classList.toggle("active");
        body.classList.toggle("body-push");
    });

    // Close nav when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.hamburger, .nav-links') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            body.classList.remove('body-push');
        }
    });

    // Submit button event listener
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = 'ty-page.html'; // Replace with your actual submission URL or logic
    });

    // Star rating functionality
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('mouseover', function () {
            resetStars();
            this.classList.add('hover-active');
            const index = this.getAttribute('data-value');
            highlightStars(index);
            showCaption(this);
        });

        star.addEventListener('mouseout', resetStars);

        star.addEventListener('click', function () {
            resetStars();
            this.classList.add('active');
            const index = this.getAttribute('data-value');
            highlightStars(index, true);
            showCaption(this);
            saveSelection(index);
        });
    });

    function highlightStars(index, keep = false) {
        document.querySelectorAll('.star').forEach(star => {
            if (star.getAttribute('data-value') <= index) {
                star.classList[keep ? 'add' : 'remove']('active');
            }
        });
    }

    function resetStars() {
        const ratingWidget = document.querySelector('.rating-widget');
        const selectedRating = ratingWidget.getAttribute('data-selected-rating');
        if (selectedRating) {
            highlightStars(selectedRating, true);
        } else {
            document.querySelectorAll('.star').forEach(star => {
                star.classList.remove('hover-active', 'active');
            });
        }
    }

    function showCaption(star) {
        const caption = star.getAttribute('data-caption');
        const emoji = star.getAttribute('data-emoji');
        document.getElementById('selectedCaption').textContent = caption;
        document.getElementById('selectedEmoji').textContent = emoji;
    }

    function saveSelection(index) {
        const ratingWidget = document.querySelector('.rating-widget');
        ratingWidget.setAttribute('data-selected-rating', index);
    }
});
