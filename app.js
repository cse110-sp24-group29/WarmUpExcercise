document.addEventListener("DOMContentLoaded", function () {
    
    var submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "ty-page.html";
    });
});
