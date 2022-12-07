const output = document.querySelector('.output');
const buttonsList = document.querySelector('.buttons');
const button = document.querySelector('.button')
const buttonItems = Array.from(buttonsList.children);
const borderRadiusButton = document.querySelector('#border-radius-button');
const colorButton = document.querySelector('#output-color-button');
const dotButton = document.querySelector('.button-dot');

const numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operatorsArray = ['+', '-', '/', '*', '%'];

let numOne = '';
let numTwo = '';
let operator = '';

output.addEventListener('DOMCharacterDataModified', function(){
    console.log('changed');
})

buttonItems.forEach(function (button) {
    button.addEventListener('click', function () {
        if (this.innerHTML == 'C') {
            clear();
        } else if (this.innerHTML == 'del') {
            if (numTwo == '') {
                numOne = numOne.slice(0, -1);
                output.innerHTML = numOne;
                operator = '';
            } else {
                numTwo = numTwo.slice(0, -1);
                output.innerHTML = numTwo;
            }
            if (output.innerHTML == '') output.innerHTML = 0;
        } else if (numbersArray.includes(button.innerHTML)) {
            if (numOne != '' && operator != '') {
                numTwo += button.innerHTML;
                output.innerHTML = numTwo;
            } else {
                numOne += button.innerHTML;
                output.innerHTML = numOne;
            }
            if (output.innerHTML.includes('.')) {
                dotButton.setAttribute('disabled', '');
            } else {
                dotButton.removeAttribute('disabled', '')
            }
        } else if (operatorsArray.includes(button.innerHTML) && numOne != '') {
            operator = button.innerHTML;
        } else if (this.innerHTML == '=' && numTwo != '') {
            switch (operator) {
                case '+':
                    output.innerHTML = `${+numOne + +numTwo}`;
                    break;
                case '-':
                    output.innerHTML = `${numOne - numTwo}`
                    break;
                case '*':
                    output.innerHTML = `${numOne * numTwo}`
                    break;
                case '%':
                    output.innerHTML = `${numOne % numTwo}`
                    break;
                case '/':
                    let i = (numOne / numTwo).toFixed(2).toString();
                    if (i[i.length - 1] == '0') {
                        i = i.replace(/.$/, '');
                        output.innerHTML = i;
                        if (i[i.length - 1] == '0') {
                            i = i.replace(/..$/, '');
                            output.innerHTML = i;
                        }
                    } else output.innerHTML = i;
            }
            numOne = output.innerHTML;
            numTwo = '';
            operator = '';
        }
    })
})

function clear() {
    output.innerHTML = '0';
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
