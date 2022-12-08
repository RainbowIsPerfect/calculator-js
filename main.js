const output = document.querySelector('.output');
const buttonsList = document.querySelector('.buttons');
const button = document.querySelector('.button')
const buttonItems = Array.from(buttonsList.children);
const borderRadiusButton = document.querySelector('#border-radius-button');
const colorButton = document.querySelector('#output-color-button');
const dotButton = document.querySelector('.button-dot');
const textAlignButton = document.querySelector('#output-text-align-button');


const numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operatorsArray = ['+', '-', '/', '*', '%'];

let numOne = '';
let numTwo = '';
let operator = '';

buttonItems.forEach(function (button) {
    button.addEventListener('click', function () {
        if (this.innerHTML == 'C') {
            clear();
        } else if (this.innerHTML == 'CE') {
            if (numTwo == '') {
                numOne = numOne.slice(0, -1);
                output.setAttribute('value', numOne);
                operator = '';
            } else {
                numTwo = numTwo.slice(0, -1);
                output.setAttribute('value', numTwo);
            }
            if (!numOne.includes('.') && !numTwo.includes('.')) {
                dotButton.removeAttribute('disabled', '')
            }
            if (output.getAttribute('value') == '') output.setAttribute('value', 0);;
        } else if (numbersArray.includes(button.innerHTML)) {
            if (numOne != '' && operator != '') {
                numTwo += button.innerHTML;
                output.setAttribute('value', numTwo);
            } else {
                numOne += button.innerHTML;
                output.setAttribute('value', numOne);
            }
            if (output.getAttribute('value').includes('.')) {
                dotButton.setAttribute('disabled', '');
            } else {
                dotButton.removeAttribute('disabled', '')
            }
        } else if (operatorsArray.includes(button.innerHTML) && numOne != '') {
            operator = button.innerHTML;
        } else if (this.innerHTML == '=' && numTwo != '') {
            switch (operator) {
                case '+':
                    output.setAttribute('value', +numOne + +numTwo);
                    break;
                case '-':
                    output.setAttribute('value', numOne - numTwo);
                    break;
                case '*':
                    output.setAttribute('value', numOne * numTwo);
                    break;
                case '%':
                    output.setAttribute('value', numOne % numTwo);
                    break;
                case '/':
                    let i = (numOne / numTwo).toFixed(2).toString();
                    if (i[i.length - 1] == '0') {
                        i = i.replace(/.$/, '');
                        output.setAttribute('value', i);
                        if (i[i.length - 1] == '0') {
                            i = i.replace(/..$/, '');
                            output.setAttribute('value', i);
                        }
                    } else output.setAttribute('value', i);
            }
            numOne = output.getAttribute('value');
            numTwo = '';
            operator = '';
        }
    })
})

function clear() {
    output.setAttribute('value', 0);
    dotButton.removeAttribute('disabled', '')
    numOne = '';
    numTwo = '';
    operator = '';
}

borderRadiusButton.addEventListener('click', function () {
    buttonItems.forEach(function (button) {
        button.classList.toggle('button-radius');
    })
})

colorButton.addEventListener('click', function () {
    output.classList.toggle('output-light');
})

textAlignButton.addEventListener('click', function () {
    output.classList.toggle('output-txt');
})