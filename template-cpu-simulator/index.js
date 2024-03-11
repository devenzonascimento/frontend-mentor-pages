let memory = {
    "00000000": "10010001",
    "00000001": "00111111",
    "00000010": "10010001",   
    "00000011": "00011111", 
    "00000100": "10010010",  
    "00000101": "00000000",
    "00000110": "00000000", 
    "00000111": "00000000",
}

let contador = 0 
const pc = document.getElementById("pc");
const mar = document.getElementById("mar");
const mdr = document.getElementById("mdr");
const acc = document.getElementById("acc");
const cir = document.getElementById("cir");

let opcode = 0;
let operand = 0;


let currentStep = 0;

function executarProximoPasso(operationStep) {
    if (currentStep < operationStep.length) {
        console.log("start")
        operationStep[currentStep]();
        currentStep++
    }
}

let main = [
    () => pc.textContent = toBinary(contador),
    () => mar.textContent = pc.textContent,
    () => mdr.textContent = memory[mar.textContent],
    () => cir.textContent = mdr.textContent,
    () => pc.textContent = toBinary(contador++),
    () => decode(cir.textContent),
    () => console.log(main)
];

function decode(cir) {

    opcode = cir.substring(0, 4)
    operand = cir.substring(4, 8)
  
    switch (opcode) {
        case "0000":
          console.log("Executou END")
            return false
  
        case "0001":
          instructionExecute(addInstruction)
            
        case "0010":
          instructionExecute(subInstruction)
  
        case "0011":
          instructionExecute(storeInstruction)
  
        case "0101":
          instructionExecute(loadInstruction)
  
        case "1001":
          operand === "0001" ? instructionExecute(inputInstruction): false
          operand === "0010" ? instructionExecute(outputInstruction): false
    
        default:
            return true;
    }
}
  
function instructionExecute(array) {
      for (let i = 0; i < array.length; i++) {
          main.push(array[i])
      }
}

const search = [
    () => pc.textContent = toBinary(contador),
    () => mar.textContent = pc.textContent,
    () => mdr.textContent = memory[mar.textContent],
    () => cir.textContent = mdr.textContent,
    () => pc.textContent = toBinary(contador++),
    () => decode(cir.textContent),
    () => console.log(main)
];

const addInstruction = [
    () => mar.textContent = operand.padStart(8, '0'),
    () => mdr.textContent = memory[mar.textContent],
    () => acc.textContent = toBinary(toDecimal(acc.textContent) + toDecimal(mdr.textContent)),
    () => console.log("Executou ADD"),
    () => instructionExecute(search)
];

const subInstruction = [
    () => mar.textContent = operand.padStart(8, '0'),
    () => mdr.textContent = memory[mar.textContent],
    () => acc.textContent = toBinary(toDecimal(acc.textContent) - toDecimal(mdr.textContent)),
    () => console.log("Executou SUB"),
    () => instructionExecute(search)
];

const storeInstruction = [
    () => mar.textContent = operand.padStart(8, '0'),
    () => memory[mar.textContent] = acc.textContent,
    () => console.log(memory),
    () => console.log("Executou STORE"),
    () => instructionExecute(search)
]

const loadInstruction = [
    () => mar.textContent = operand.padStart(8, '0'),
    () => mdr.textContent = memory[mar.textContent],
    () => acc.textContent = mdr.textContent,
    () => console.log("Executou LOAD"),
    () => instructionExecute(search)
]

const inputInstruction = [
    () => acc.textContent = toBinary(prompt("Informe um valor")),
    () => console.log("Executou INPUT"),
    () => instructionExecute(search)
]

const outputInstruction = [
    () => alert(acc.textContent),
    () => console.log("Executou OUTPUT"),
    () => instructionExecute(search)
]


document.getElementById("step").addEventListener("click", () => {
    executarProximoPasso(main)
})

function toBinary(num) {
    return Number(num).toString(2).padStart(8, '0')
}
function toDecimal(num) {
    return parseInt(num, 2)
}