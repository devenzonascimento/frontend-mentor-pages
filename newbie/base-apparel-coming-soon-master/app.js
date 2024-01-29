function configContent() {
    var image = document.querySelectorAll(".hero-img")
    if (window.innerWidth <= 1024) {
        image[0].setAttribute("src", "images/hero-mobile.jpg")
    } else {
        image[1].setAttribute("src", "images/hero-desktop.jpg")
    }
}

function validateEmail () {
    var email = document.getElementById("email");
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regexEmail.test(email.value)) {
        var alerta = document.querySelector(".alerta")
        alerta.style.display = "block"

        var box = document.getElementById("email-box")
        box.style.border = "1px solid hsl(0, 93%, 68%)"

        var error = document.getElementById("error")
        error.style.display = "block"

        return false
    } else {
        return true
    }
}