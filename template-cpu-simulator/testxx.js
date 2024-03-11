let binary1 = "00001001"

let binary2 = "5"

console.log(toBinary("00000101"))
console.log(toDecimal("00000101"))

function toBinary(num) {
    return Number(num).toString(2).padStart(8, '0')
}

function toDecimal(num) {
    return parseInt(num, 2)
}