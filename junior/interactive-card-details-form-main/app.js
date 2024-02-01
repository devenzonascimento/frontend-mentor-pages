var isValid;
var inputCardName = document.querySelector("#input-name");
var inputCardNumber = document.querySelector("#input-number");
var inputCardMonth = document.querySelector("#input-month");
var inputCardYear = document.querySelector("#input-year");
var inputCardCVC = document.querySelector("#input-cvc");

inputCardNumber.maxLength = 19;
inputCardMonth.maxLength = 2;
inputCardYear.maxLength = 2;
inputCardCVC.maxLength = 3;

//Mascara para Card Number
inputCardNumber.addEventListener('keypress', function(event) {
    if (inputCardNumber.value.length == 4 || inputCardNumber.value.length == 9 || inputCardNumber.value.length == 14) {
        inputCardNumber.value += " ";
    }
})

document.getElementById('form-interface').addEventListener('submit', function(event) {
    event.preventDefault();

    cardValidate();

    if (isValid) {
        document.getElementById('form-interface').style.display = "none";
        document.getElementById('thanks-interface').style.display = "flex";
    }
    return;
});

function cardValidate() {

    isValid = true;
    
    var input = document.querySelectorAll("input");

    for(var i = 0; i < input.length; i++) {
        removeErrorStyles(input[i]);
        if (input[i].value == "") {
            addErrorStyles(input[i], "Can't be blank");
            isValid = false;
        }
    }

    if (inputCardName.value.length > 0 && inputCardName.value.length < 3) {
        addErrorStyles(inputCardName, "Insert a valid name");
        isValid = false;
    }

    var regexCreditCard = /^(\d{4}\s){3}\d{4}$/;
    if (!regexCreditCard.test(inputCardNumber.value)) {
        addErrorStyles(inputCardNumber, "wrong format, numbers only");
        isValid = false;
    }

    if (inputCardMonth.value.length != 2 || isNaN(Number(inputCardMonth.value))) {
        addErrorStyles(inputCardMonth, "Insert a valid date");
        isValid = false;
    }
    if (inputCardMonth.value < 0 || inputCardMonth.value > 12) {
        addErrorStyles(inputCardMonth, "Insert a valid date");
        isValid = false;
    }
    if (inputCardYear.value.length != 2 || isNaN(Number(inputCardYear.value))) {
        addErrorStyles(inputCardYear, "Insert a valid date");
        isValid = false;
    }

    if (inputCardCVC.value.length != 3 || isNaN(Number(inputCardCVC.value))) {
        addErrorStyles(inputCardCVC, "Insert a valid CVC");
        isValid = false;
    }

    showResults();
    
    return;
}

function showResults() {
    var resultCardNumber = document.querySelector("#card-number");
    var resultCardName = document.querySelector("#card-name");
    var resultCardDate = document.querySelector("#card-date");
    var resultCardCVC = document.querySelector("#card-cvc");

    if (inputCardNumber.value != "") {
        resultCardNumber.textContent = inputCardNumber.value;
    }
    if (inputCardName.value != "") {
        resultCardName.textContent = inputCardName.value;
    }
    if (inputCardMonth.value != "" && inputCardYear.value != "") {
        resultCardDate.textContent = inputCardMonth.value + "/" + inputCardYear.value;
    }
    if (inputCardCVC.value != "") {
        resultCardCVC.textContent = inputCardCVC.value;
    }
}

function addErrorStyles(inputElement, msg) {

    removeErrorStyles(inputElement);

    var errorElement = inputElement.parentNode.querySelector(".msg-error");
    inputElement.style.border = "1px solid hsl(0, 100%, 66%)";

    if (!errorElement) {
        errorElement = document.createElement("p");
        errorElement.classList.add("msg-error");
        errorElement.textContent = msg;

        inputElement.parentNode.appendChild(errorElement);
    }

    return;
}

function removeErrorStyles(inputElement) {
    var errorElement = inputElement.parentNode.querySelector(".msg-error");
    inputElement.style.border = "";

    if (errorElement) {
        errorElement.remove();
    }
}
