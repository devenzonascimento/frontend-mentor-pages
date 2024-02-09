const bill = document.querySelector("#bill");
const numPeople = document.querySelector("#n-people");
const customTip = document.querySelector("#custom-tip");
const tipAmount = document.querySelector("#tip-amount");
const total = document.querySelector("#total");

document.getElementById('bill-form').addEventListener('submit', function(event) {
    event.preventDefault();
});

// Verifica o retorno das entradas
function checkInputs() {

    var checkButtons = 0
    var tipAmountPerc = 0
    var isValid = false

    if (customTip.value !== "") {
        disableAllButtons()
    }

    buttons.forEach(button => {
        if (button.classList.contains("active")) {
            checkButtons = button.value
        }
    })

    

    if (checkButtons !== 0) {

        if (bill.value !== "" && numPeople.value !== "") {
            tipAmountPerc = checkButtons
            isValid = true
        }

    } else if (bill.value !== "" && numPeople.value !== "" && 
    customTip.value !== "") {

        tipAmountPerc = customTip.value
        isValid = true
    }
    
    if (isValid) {
        var billMap = {
            "bill": Number(bill.value),
            "numPeople": Number(numPeople.value),
            "tipAmountPerc": Number(tipAmountPerc)
        }

        
        /*  PAREI AQUI, ARRUMANDO A LOGICA PARA MOSTRAR OS RESULTADOS

        total.value = (billMap.bill / billMap.numPeople)
        tipAmount.value = total.value * (billMap.tipAmountPerc / 100)
        total.value -= tipAmount.value
        console.log(billMap.bill / billMap.numPeople)
        console.log(total.value * (billMap.tipAmountPerc / 100))
        console.log(tipAmount)
        */
    
        return console.log(billMap) 
    }

    return false
}

// Disparo dos Inputs
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener("input", () => {
        checkInputs()
    });
});

// Disparo dos Buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener("click", () => {

        buttons.forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove("active");
            }
        });

            if (customTip.value !== "") {
                customTip.value = ""
            }

            button.classList.toggle("active");
            checkInputs()     
    });
});

// Desativa todos os Buttons
function disableAllButtons() {
    buttons.forEach(otherButton => {
        otherButton.classList.remove("active");            
    })
}







  
  