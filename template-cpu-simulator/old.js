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



function stepButton() {

    pc.value = toBinary(contador)

    mar.value = pc.value;

    mdr.value = memory[mar.value]
      
    cir.value = mdr.value
    
    pc.value = toBinary(contador++)

    decode(cir.value)

}

function decode(cir) {
  const opcode = cir.substring(0, 4)
  const operand = cir.substring(4, 8)

  switch (opcode) {
      case "0000":
        console.log("Executou END")
          return false

      case "0001":
        console.log("Executou ADD")
          addInstruction(operand);
          
      case "0010":
        console.log("Executou SUB")
          subInstruction(operand);

      case "0011":
        console.log("Executou STORE")
          storeInstruction(operand);

      case "0101":
        console.log("Executou LOAD")
          loadInstruction(operand);

      case "1001":
          operand === "0001" ? inputInstruction(): false
          operand === "0010" ? outputInstruction(): false
  
      default:
          return false;
  }
}


function addInstruction(address) {
  mar.value = address.padStart(8, '0')
  mdr.value = memory[mar.value]
  let memoryValue = toDecimal(mdr.value)

  let accValue = toDecimal(acc.value)

  acc.value = toBinary(accValue + memoryValue)
}

function subInstruction(address) {
    mar.value = address.padStart(8, '0')
    let memoryValue = toDecimal(memory[mar.value])
  
    let accValue = toDecimal(acc.value)
  
    acc.value = toBinary(accValue - memoryValue)
}

function storeInstruction(address) {
  mar.value = address.padStart(8, '0')

  memory[mar.value] = acc.value
  console.log(memory)
}

function loadInstruction(address) {
    mar.value = address.padStart(8, '0');
    mdr.value = memory[mar.value];
    acc.value = mdr.value;
}

function inputInstruction() {
    console.log("Executou INPUT")
    let tempAcc = prompt("Informe um valor")
    acc.value = toBinary(tempAcc)
}

function outputInstruction() {
    console.log("Executou OUTPUT")
    alert(acc.value)
}


function toBinary(num) {
    return Number(num).toString(2).padStart(8, '0')
}
function toDecimal(num) {
    return parseInt(num, 2)
}
document.getElementById("step").addEventListener("click", stepButton)
