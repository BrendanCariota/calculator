
let calcString = ''
let firstNumber = ''
let secondNumber = ''
let operator
let total

const numBtns = document.querySelectorAll('.numBtn')
const btns = Array.from(numBtns)
const screenValue = document.querySelector('.numContainer')

screenValue.innerText = calcString

const createString = (e) => {

    // if (secondNumber && operator) {
    //     firstNumber = operate(firstNumber, secondNumber, operator)
    //     console.log(firstNumber)
    // }

    if (e.target.innerText === "=") {
        secondNumber = calcString
        calcString = ''
        screenValue.innerText = calcString
        operate(firstNumber, secondNumber, operator)
    }
    else if (e.target.innerText === '+' || e.target.innerText === '-' || e.target.innerText === '/' || e.target.innerText === '*') {
        if (operator != undefined) {
            secondNumber = calcString
            let newFirstNumber = operate(firstNumber, secondNumber, operator)
            firstNumber = newFirstNumber
            calcString = ''
            console.log(firstNumber)
        }
        operator = e.target.innerText
        firstNumber = calcString
        calcString = ''
        screenValue.innerText = calcString
    } else {
        calcString += e.target.innerText
        screenValue.innerText = calcString
    }

    if (e.target.innerText === 'clr') {
        calcString = ''
        firstNumber = ''
        secondNumber = ''
        operator = ''
        screenValue.innerText = calcString
    }
}

// Add click events to all calculator buttons
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', createString)
}

const add = (x, y) => {
    return parseInt(x, 10) + parseInt(y, 10)
}

const subtract = (x, y) => {
    return parseInt(x, 10) - parseInt(y, 10)
}

const multiply = (x, y) => {
    return parseInt(x, 10) * parseInt(y, 10)
}

const divide = (x, y) => {
    return parseInt(x, 10) / parseInt(y, 10)
}

const operate = (firstNum, secondNum, operation) => {

    switch (operation) {
        case '+':
            total = add(firstNum, secondNum)
            screenValue.innerText = total
            return total
        case '-':
            total = subtract(firstNum, secondNum)
            screenValue.innerText = total
            break;
        case '*':
            total = multiply(firstNum, secondNum)
            screenValue.innerText = total
            break;
        case '/':
            total = divide(firstNum, secondNum)
            screenValue.innerText = total
            break;
        default:
            alert('Something run')
            break;
    }
}