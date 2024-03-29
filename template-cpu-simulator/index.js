document.getElementById("step").addEventListener("click", () => {
    executarProximoPasso(main)
})

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

let opcode = "";
let operand = "";


let currentStep = 0;
function executarProximoPasso(operationStep) {
    if (currentStep < operationStep.length) {
        operationStep[currentStep]();
        currentStep++
    }
}
const search = [
    () => pc.textContent = toBinary(contador),
    () => mar.textContent = pc.textContent,
    () => mdr.textContent = memory[mar.textContent],
    () => cir.textContent = mdr.textContent,
    () => pc.textContent = toBinary(contador+=1),
    () => decode(cir.textContent),
];
function instructionExecute(array) {
    main = main.concat(array)
}
let main = [
    () => instructionExecute(search)
];


function decode(cir) {

    opcode = cir.substring(0, 4)
    operand = cir.substring(4, 8)

    switch (opcode) {
        case "0000":
            return false

        case "0001":
            instructionExecute(addInstruction)
            break;

        case "0010":
            instructionExecute(subInstruction)
            break;
        case "0011":
            instructionExecute(storeInstruction)
            break;
        case "0101":
            instructionExecute(loadInstruction)
            break;
        case "1001":
            operand === "0001" ? instructionExecute(inputInstruction) : false
            operand === "0010" ? instructionExecute(outputInstruction) : false

        default:
            return true;
    }
}

const addInstruction = [
    () => mar.textContent = operand.padStart(8, '0'),
    () => mdr.textContent = memory[mar.textContent],
    () => acc.textContent = toBinary(toDecimal(acc.textContent) + toDecimal(mdr.textContent)),
    () => instructionExecute(search)
];

const subInstruction = [
    () => mar.textContent = operand.padStart(8, '0'),
    () => mdr.textContent = memory[mar.textContent],
    () => acc.textContent = toBinary(toDecimal(acc.textContent) - toDecimal(mdr.textContent)),
    () => instructionExecute(search)
];

const storeInstruction = [
    () => mar.textContent = operand.padStart(8, '0'),
    () => memory[mar.textContent] = acc.textContent,
    () => instructionExecute(search)
]

const loadInstruction = [
    () => mar.textContent = operand.padStart(8, '0'),
    () => mdr.textContent = memory[mar.textContent],
    () => acc.textContent = mdr.textContent,
    () => instructionExecute(search)
]

const inputInstruction = [
    () => acc.textContent = toBinary(prompt("Informe um valor")),
    () => instructionExecute(search)
]

const outputInstruction = [
    () => alert(acc.textContent),
    () => instructionExecute(search)
]


function toBinary(num) {
    return Number(num).toString(2).padStart(8, '0')
}
function toDecimal(num) {
    return parseInt(num, 2)
}