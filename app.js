document.addEventListener("DOMContentLoaded", function () {
    
    var submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = 'ty-page.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    function updateActiveLink() {
        const links = navLinks.querySelectorAll('a');
        const currentPage = window.location.hash;

        links.forEach(link => {
            link.classList.remove('current-page'); // remove the class from all links
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('current-page'); // add class if the href matches the current page
            }
        });
    }

    updateActiveLink();
    window.addEventListener('hashchange', updateActiveLink);
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



