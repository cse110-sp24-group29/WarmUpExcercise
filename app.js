document.addEventListener("DOMContentLoaded", function () {
    
    var submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = 'ty-page.html';
    });
});

document
    .getElementById("hamburger-menu")
    .addEventListener("click", function () {
        const navLinks = document.getElementById("nav-links");
        navLinks.classList.toggle("active");
    });

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('mouseover', function () {
        resetStars();
        this.classList.add('hover-active');
        const index = this.getAttribute('data-value');
        highlightStars(index);
        document.getElementById('selectedCaption').textContent = this.getAttribute('data-caption');
        document.getElementById('selectedEmoji').textContent = this.getAttribute('data-emoji');
    });

    star.addEventListener('mouseout', function () {
        resetStars();
    });

    star.addEventListener('click', function () {
        resetStars();
        this.classList.add('active');
        const index = this.getAttribute('data-value');
        highlightStars(index, true);
        document.getElementById('selectedCaption').textContent = this.getAttribute('data-caption');
        document.getElementById('selectedEmoji').textContent = this.getAttribute('data-emoji');
    });
});

function highlightStars(index, keep = false) {
    document.querySelectorAll('.star').forEach(star => {
        if (star.getAttribute('data-value') <= index) {
            if (keep) {
                star.classList.add('active');
            } else {
                star.classList.add('hover-active');
            }
        }
    });
}

function resetStars() {
    document.querySelectorAll('.star').forEach(star => {
        star.classList.remove('hover-active', 'active');
    });
}



