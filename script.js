const input__number1 = document.querySelector('.input__number1');
const input__number2 = document.querySelector('.input__number2');
const select = document.querySelector('.operation');
const btnResult = document.querySelector('.btn__result');
const finalResult = document.querySelector('.result');

btnResult.addEventListener('click', function () {
    const a = Number(input__number1.value);
    const b = Number(input__number2.value);
    const operation = select.value;

    
const calclator = (a, b, operation) => {
    let result = null;
    switch (operation) {
        case '+':
            result = a + b
            break;
    
        case '-':
            result = a - b
            break;
    
        case '*':
            result = a * b
            break;
    
        case '/':
            result = a / b 
            break;
    
        default:
            result = 'Так не пойдет'
            break;
    }

    return result;
} 

    const result = calclator(a, b, operation)
    finalResult.innerHTML = result
    console.log(result)
})