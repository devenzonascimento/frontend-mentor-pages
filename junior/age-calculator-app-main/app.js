// Obtem referências para os elementos de entrada e exibição
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const resultDay = document.querySelector("#day-result");
const resultMonth = document.querySelector("#month-result");
const resultYear = document.querySelector("#year-result");

// Define o comprimento máximo para os campos de entrada
inputDay.maxLength = 2;
inputMonth.maxLength = 2;
inputYear.maxLength = 4;

// Função para calcular a idade
function calculate() {

    // Armazena um valor boolean, para validar as informações
    var isValid = true;
    
    // Obtem os valores das entradas como números inteiros
    var inputDayValue = parseInt(inputDay.value, 10);
    var inputMonthValue = parseInt(inputMonth.value, 10);
    var inputYearValue = parseInt(inputYear.value, 10);

    // Remove todos os estilos de erros caso existam
    removeStyle(inputDay);
    removeStyle(inputMonth);
    removeStyle(inputYear);

    // Verifica se algum campo está vazio e se ele é um numero
    if (inputDay.value == "") {
        errorStyle(inputDay, "This field is required");
        isValid = false;
    } else if (isNaN(inputDay.value)) {
        errorStyle(inputDay, "This is not a number");
        isValid = false;
    }
    if (inputMonth.value == "") {
        errorStyle(inputMonth, "This field is required");
        isValid = false;
    } else if (isNaN(inputMonth.value)) {
        errorStyle(inputMonth, "This is not a number");
        isValid = false;
    }
    if (inputYear.value == "") {
        errorStyle(inputYear, "This field is required");
        isValid = false;
    } else if (isNaN(inputYear.value)) {
        errorStyle(inputYear, "This is not a number");
        isValid = false;
    }

    // Chama uma função para obter o ultimo dia de um mês
    maxDay = lastDay(inputYearValue, inputMonthValue);

    // Verifica se o dia está dentro do limite do mês informado
    if (inputDayValue > maxDay) {       
        errorStyle(inputDay, 'Must be a valid date');
        isValid = false;
    }

    // Verifica se o dia está dentro do intervalo correto
    if (inputDayValue < 1 || inputDayValue > 31) {
        errorStyle(inputDay, 'Must be a valid day');
        isValid = false;
    }

    // Verifica se o mês está dentro do intervalo correto
    if (inputMonthValue < 1 || inputMonthValue > 12) {
        errorStyle(inputMonth, 'Must be a valid month');
        isValid = false;
    }

    // Obtendo referências para o ano, mês e dia atual
    var dataAtual = new Date();
    var year = dataAtual.getFullYear();
    var month = dataAtual.getMonth() + 1;
    var day = dataAtual.getDate();

    // Verifica se o ano não esta no futuro, ou 100 anos no passado
    if (inputYearValue > year) {
        errorStyle(inputYear, 'Must be in the past');
        isValid = false;
    }

    // Verifica se o dia inserido é maior que o dia atual
    if ((day - inputDayValue) <= 0) {
        // Se for o caso, ajusta o valor do mês e do dia
        inputMonthValue += 1;
        inputDayValue = (day - inputDayValue) + lastDay(year, (inputMonthValue - 2));
    } else {
        // Se o dia inserido for menor que o dia atual, calcula a diferença normalmente
        inputDayValue = day - inputDayValue;
    }

    // Verifica se o mês inserido é maior que o mês atual
    if ((month - inputMonthValue) <= 0) {
        // Se for o caso, ajusta o valor do ano e do mês
        inputYearValue += 1;
        inputMonthValue = (month - inputMonthValue) + 12;
    } else {
        // Se o mês inserido for menor que o mês atual, calcula a diferença normalmente
        inputMonthValue = month - inputMonthValue;
    }

    if (isValid) {
        //Atribui os resultados para serem exibidos nos elementos HTML
        resultYear.textContent = year - inputYearValue;
        resultMonth.textContent = inputMonthValue;
        resultDay.textContent = inputDayValue;
        removeAllStyles();
    }
    
    return;
}


// Função para verificar qual o ultimo dia de determinado mês
function lastDay(ano, mes) {
    // Verifica se o mês informado é negativo, para resetar ele
    if(mes < 0) {
        // se for o caso, ele pega um ano inteiro e soma ao negativo
        mes = 12 - mes;
    }
    return new Date(ano, mes, 0).getDate();
}

function errorStyle(inputElement, msg) {
    // Chama uma função para remover todos os estilos de erro
    removeStyle(inputElement);
    
    // Define a cor da borda do input como vermelho
    inputElement.style.border = "1px solid hsl(0, 100%, 67%)";

    // Declara o label e defini a cor do texto como vermelho
    var label = inputElement.parentNode.querySelector("label");
    label.style.color = "hsl(0, 100%, 67%)";

    // Cria um Elemento HTML de parágrafo
    var errorElement = document.createElement("p");
    errorElement.classList.add("msg-error");
    errorElement.textContent = msg;
    inputElement.parentNode.appendChild(errorElement);
}

function removeStyle(inputElement) {
    inputElement.style.border = "";
    
    var labelElement = inputElement.parentNode.querySelector("label");
    labelElement.style.color = "";

    var errorElement = inputElement.parentNode.querySelector(".msg-error");
    if (errorElement) {
        errorElement.remove();
    }
}

function removeAllStyles() {
    var label = document.querySelectorAll("label");
    var input = document.querySelectorAll("input");
    var error = document.querySelectorAll(".msg-error");
    for(var i = 0; i < 3; i++) {
        

        label[i].style.color = "";
        input[i].style.border = "";

        if (error[i]) {
            error[i].remove();
        }
    }
}