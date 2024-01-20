function validate() {
    var isValid = true;
    var nameRegex = /^[A-Za-z\s]{3,50}$/;
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    
    var txtname = document.getElementById("name");
    if (!nameRegex.test(txtname.value.trim())) {
        errorStyles(txtname);
        isValid = false;
    }

    var txtlastname = document.getElementById("lastname");
    if (!nameRegex.test(txtlastname.value.trim())) {
        errorStyles(txtlastname);
        isValid = false;
    }

    var email = document.getElementById("email");
    if (!regexEmail.test(email.value)) {
        errorStyles(email);
        isValid = false;
    } 

    var password = document.getElementById("password");
    if (password.value.length < 8 || password.value.length > 20) {
        errorStyles(password);
        isValid = false;
    }

    return isValid;
}

function errorStyles(inputElement) {
    inputElement.style.color = "hsl(0, 100%, 74%)";
    
    var txt = inputElement.closest('.txt');
    txt.style.border = "1px solid hsl(0, 100%, 74%)";
    
    var errorIcon = txt.nextElementSibling;
    errorIcon.style.display = "block";

    var errorMsg = errorIcon.nextElementSibling;
    errorMsg.style.display = "block";
}


