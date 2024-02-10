const bill = document.querySelector("#bill");
const numPeople = document.querySelector("#n-people");
const customTip = document.querySelector("#custom-tip");
const tipAmount = document.querySelector("#tip-amount");
const total = document.querySelector("#total");
const resetButton = document.querySelector("#reset-btn")

const inputs = document.querySelectorAll('input');
const buttons = document.querySelectorAll('button');

// Evita o envio automatico do formulario
document.getElementById('bill-form').addEventListener('submit', function(event) {
    event.preventDefault();
});

// Verifica o retorno das entradas
function checkInputs() {

    var checkButtons = 0
    var tipAmountPerc = 0
    var isValid = false

    // Se a % custom for inserida, ele desconsidera os botões
    if (customTip.value !== "") {
        disableAllButtons()
    }

    // Se tiver algum botão ativo, guardo a o valor do botão
    buttons.forEach(button => {
        if (button.classList.contains("active")) {
            checkButtons = button.value
        }
    })


    if (checkButtons !== 0 && bill.value !== "" && numPeople.value !== "") {

        tipAmountPerc = checkButtons
        isValid = true
        
    } else if (bill.value !== "" && numPeople.value !== "" && 
    customTip.value !== "") {

        tipAmountPerc = customTip.value
        isValid = true
    }
    
    // Caso seja valido, e todos os inputs forem recebidos, guarda os valores em um objeto
    if (isValid) {
        var billMap = {
            "bill": Number(bill.value),
            "tipAmountPerc": Number(tipAmountPerc),
            "numPeople": Number(numPeople.value)
        }

        showResults(billMap)
        activatedResetButton()
    }

    return
}

// Verifica se o valor dos inputs esta no formato Number
function validateInputs(input) {
    if (input.value !== "" && isNaN(Number(input.value))) {      
        input.style.border = "2px solid lightcoral"
    } else {
        input.style.border = ""
    }
}

// Ativa o uso do Reset Button, para resetar o form
function activatedResetButton() {
    resetButton.classList.add("active")
    resetButton.disabled = false

}

// Exibe os resultados na tela
function showResults(billMap) {
    var tipAmountValue = (billMap.bill / billMap.numPeople) * (billMap.tipAmountPerc / 100);
    tipAmount.textContent = tipAmountValue.toFixed(2);
    
    var totalValue = (billMap.bill / billMap.numPeople) + tipAmountValue;
    total.textContent = totalValue.toFixed(2);
}

// Disparo dos Inputs
inputs.forEach(input => {
    input.addEventListener("input", () => {
        checkInputs()
        validateInputs(input)
    });
});

// Disparo dos Buttons
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

// Mensagem de erro do elemento NumPeople
numPeople.addEventListener("input", () => {

    if (Number(numPeople.value) == 0) {      
        errorStyles(numPeople)
    } else {
        validateInputs(numPeople)
        removeStyles(numPeople)
    }
})

// Ações ao disparar o Reset Button
resetButton.addEventListener("click", () => {

    resetButton.classList.remove("active")
    disableAllButtons()
    tipAmount.textContent = "$0.00"
    total.textContent = "$0.00"

    
})

// Desativa todos os Buttons
function disableAllButtons() {
    buttons.forEach(otherButton => {
        otherButton.classList.remove("active");            
    })
}

// Adiciona os estilo CSS de erro no elemento
function errorStyles(input) {

    removeStyles(input)

    var errorElement = document.createElement("p")
    errorElement.classList.add("msg-error")
    errorElement.textContent = "Can't be zero"

    input.style.border = "2px solid lightcoral"
    input.closest(".input-box").appendChild(errorElement)
}

// Remove os estilo CSS de erro no elemento
function removeStyles(input) {
    var errorElement = input.parentNode.parentNode.querySelector(".msg-error")

    if (errorElement) {
        errorElement.remove()
    }
}










  
  