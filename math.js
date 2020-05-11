// let x = 5+5
// let y = 5-5
// let z = 5*5
// let w = 5/5

// console.log(x)
// console.log(y)
// console.log(z)
// console.log(w)
let [ , , op, num1, num2 ] = process.argv
num1 = parseInt(num1)
num2 = parseInt(num2)
// let op = process.argv[2]
// let num1 = parseInt(process.argv[3])
// let num2 = parseInt(process.argv[4])
const adder = (a, b) => {
    return a + b
}

const subtractor = (a, b) => {
    return a - b
}

const multiplier = (a, b) => {
    return a * b
}

const divider = (a, b) => {
    return a / b
}

const modulus = (a, b) => {
    return a % b
}

switch (op) {
    case 'add':
        console.log(adder.return)
        break
    case 'subtract':
        console.log(subtractor.return)
        break
    case 'multiply':
        console.log(multiplier.return)
        break
    case 'divider':
        console.log(divider.return)
        break
    case 'modulus':
        console.log(modulus.return)
        break

}
// console.log(adder(5, 7))
// console.log(subtractor(5, 7))
// console.log(multiplier(5, 7))
// console.log(divider(5, 7))
console.log(adder(num1, num2))
console.log(subtractor(num1, num2))
console.log(multiplier(num1, num2))
console.log(divider(num1, num2))