function add(a,b) {
    return a + b;
}


function substract(a,b) {
    return a - b;
}


function multiply(a,b) {
    return a * b;
}


function divide(a,b) {
    return a / b;
}


function operate(operator, a,b) {
    a = Number(a)
    b = Number(b)

    switch(operator) {
        case '+':
            return add(a,b)

        case '-':
            return substract(a,b)

        case '*':
            return multiply(a,b)

        case '/':
            if(b === 0) return 0
            else return divide(a,b)
        
         default:
            return null
    }
}



const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operators');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');

numberButtons.forEach((button) =>
    button.addEventListener('click')

)

operatorButtons.forEach((button) =>
    button.addEventListener('click')
)