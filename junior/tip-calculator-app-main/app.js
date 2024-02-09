const bill = document.querySelector("#bill");
const numPeople = document.querySelector("#n-people");
const customTip = document.querySelector("#custom-tip");
const tipAmount = document.querySelector("#tip-amount");
const total = document.querySelector("#total");

document.getElementById('bill-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    alert(`Valor de ${bill.value} para ${numPeople.value} pessoas | valor de gorgeta: ${customTip.value}`);

    if (bill.value !== "" && numPeople.value !== "" && customTip.value !== "") {
        alert(`Valor de ${bill.value} para ${numPeople.value} pessoas | valor de gorgeta: ${customTip.value}`);
    }

    return;
});

// Adiciona eventos de escuta para cada input usando 'input'
bill.addEventListener("input", verificarInputs);
numPeople.addEventListener("input", verificarInputs);
customTip.addEventListener("input", verificarInputs);

function verificarInputs() {
    console.log("alterou");
    if (bill.value !== "" && numPeople.value !== "" && customTip.value !== "") {
        // Faça o que for necessário quando todos os campos estiverem preenchidos
    }
}





  
  