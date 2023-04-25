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

let num1;
let num2 = 0;
let numArray = [];
let operator = '';

console.log(num1);

function storeNumber(num) {
    num1 = display.textContent;
}

numbers.forEach((num) => {
    num.addEventListener('click', () => {
        if (display.textContent == '0' && activeDisplay) {
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
})


/*

* click operand button
* append display to numbers array
* if numArray is less than 2
* operate on numbers in array with selected operand
* store result in 1st position remove any other stored numbers
* update display with result
* set display to inactive

*/

function operate(value1, value2, operator) {
    numArray.push(parseFloat(display.textContent));
    if (numArray.length < 2) {
        return
    } else {
        let a = numArray[0];
        let b = numArray[1];    
        switch(operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '×':
                return a * b;
            case '÷': 
                return a / b;
        }
    }
    display.textContent = num1;
}


THis is a side scroll test line THis is a side scroll test line THis is a side scroll test line THis is a side scroll test line THis is a side scroll test line THis is a side scroll test line THis is a side scroll test line THis is a side scroll test line THis is a side scroll test line 