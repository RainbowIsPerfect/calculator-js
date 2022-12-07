const inputButton = document.querySelector('.output');
const buttonsList = document.querySelector('.buttons');
const button = document.querySelector('.button')
const buttonItems = Array.from(buttonsList.children);
const borderRadiusButton = document.querySelector('#border-radius-button');
const colorButton = document.querySelector('#output-color-button');

let numOne;
let numTwo;
let operator;

buttonItems.forEach(function (button) {
    button.addEventListener('click', function () {
        console.log(this.innerHTML);
        if (this.innerHTML === 'C') {
            inputButton.innerHTML = 0;
        } else if (this.innerHTML === '+') {
            numOne = inputButton.innerHTML;
            operator = '+';
            inputButton.innerHTML = 0;
        } else if (this.innerHTML === '-') {
            numOne = inputButton.innerHTML;
            operator = '-';
            inputButton.innerHTML = 0;
        } else if (this.innerHTML === '/') {
            numOne = inputButton.innerHTML;
            operator = '/';
            inputButton.innerHTML = 0;
        } else if (this.innerHTML === '*') {
            numOne = inputButton.innerHTML;
            operator = '*';
            inputButton.innerHTML = 0;
        } else if (inputButton.innerHTML == '0' && this.innerHTML !== '=') {
            inputButton.innerHTML = this.innerHTML;
        } else if (this.innerHTML === '=') {
            if (typeof numOne != 'undefined') {
                numTwo = inputButton.innerHTML;
            }
            if (typeof numTwo != 'undefined') {
            switch(operator) {
                case '+':
                    inputButton.innerHTML = `${+numOne + +numTwo}`;
                    break;
                case '-':
                    inputButton.innerHTML = `${+numOne - +numTwo}`;
                    break;
                case '/':
                    inputButton.innerHTML = `${(+numOne / +numTwo).toFixed(2)}`;
                    break;
                case '*':
                    inputButton.innerHTML = `${+numOne * +numTwo}`;
                    break;
                default: 
                    inputButton.innerHTML = 0;
            }
            numOne = undefined;
            numTwo = undefined;
            operator = '';
        }
        }
        else {
            inputButton.innerHTML += this.innerHTML;
        }
    })
})

borderRadiusButton.addEventListener('click', function () {
    buttonItems.forEach(function (button) {
        button.classList.toggle('button-radius50');
    })
})

colorButton.addEventListener('click', function () {
    inputButton.classList.toggle('output-light');
})