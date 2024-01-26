function validate() {
    const email = document.getElementById("email");
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email.value)) {
        email.style.border = "1px solid red"
        var msgError = document.createElement("p")
        msgError.textContent = "Please provide a valid email address"
        var form = document.querySelector("form")

        form.parentNode.insertBefore(msgError, form.nextSibling);

        form.appendChild(msgError)
        return false
    } 

    return true
}