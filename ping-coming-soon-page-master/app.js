const email = document.getElementById("email");
var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate() {

    if (!regexEmail.test(email.value)) {
        removeError(email)
        errorStyles(email, "Please provide a valid email address")
        return false
    }

    return true
}

function errorStyles(input , msg) {
    input.style.border = "1px solid rgb(252, 83, 83)"
    var parentElement = document.querySelector(".email-box")
    var msgError = document.createElement("p")
    msgError.classList.add("msg-error")
    msgError.textContent = msg
    
    parentElement.appendChild(msgError);
}

function removeError(input) {
    var msgError = input.parentNode.querySelector('.msg-error');
    if (msgError) {
        input.parentNode.removeChild(msgError)
    }
}