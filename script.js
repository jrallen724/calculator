const numbers = document.querySelectorAll('.number');
const decimal = document.querySelector('#decimal');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#mutiply');
const divide = document.querySelector('#divide');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');
let display = document.querySelector('.display');
let activeDisplay = true; 

let num1 = 0;
let num2 = 0;
let result = 0;
let operator = '';

function storeNumber(num) {
    num1 = display.textContent;
}

numbers.forEach((num) => {
    num.addEventListener('click', () => {
        if (display.textContent == '0') {
            display.textContent = num.textContent;
        } else {
            display.textContent = display.textContent + num.textContent;
        }
    })
})

decimal.addEventListener('click', () => {
    if(!activeDisplay || display.textContent.includes('.')) {
        return;
    } else {
        display.textContent = display.textContent + '.';
    }    
})

del.addEventListener('click', () => {
    if (activeDisplay && display.textContent !== '0') {
        display.textContent = display.textContent.slice(0, -1);
    } 
    if (display.textContent === '') {
        display.textContent = '0'
    }
})

 clear.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    display.textContent = '0';
    activeDisplay = true;
 })

 add.addEventListener('click', () => {
    num1 = parseFloat(display.textContent);
    operator = add.textContent;
 })