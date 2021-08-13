

  import {add, subtract, multiply, divide} from './utils.js';
  
  
  const FirstDigit = document.getElementById('firstdigit');
  const SecondDigit = document.getElementById('seconddigit');
  const Result = document.getElementById('result');
  const AddButton = document.getElementById('calcbutton');
  const SubButton = document.getElementById('subbutton');
  const TimesButton = document.getElementById('timesbutton');
  const DivideButton = document.getElementById('dividebutton');
  const Operator = document.getElementById('operator');


  
  AddButton.addEventListener('click', () => {
    const number1 = Number(FirstDigit.value);
    const number2 = Number(SecondDigit.value);
    const sum = add(number1, number2);
    Result.textContent = `${number1} + ${number2} = ${sum}`;
    Operator.textContent = '+'
  })

  SubButton.addEventListener('click', () => {
    const number1 = Number(FirstDigit.value);
    const number2 = Number(SecondDigit.value);
    const subtracted = subtract(number1, number2);
    Result.textContent = `${number1} - ${number2} = ${subtracted}`;
    Operator.textContent = '-'
  })

  TimesButton.addEventListener('click', () => {
    const number1 = Number(FirstDigit.value);
    const number2 = Number(SecondDigit.value);
    const Multiplied = multiply(number1, number2);
    Result.textContent = `${number1} + ${number2} = ${Multiplied}`;
    Operator.textContent = '*'
  })

  DivideButton.addEventListener('click', () => {
    const number1 = Number(FirstDigit.value);
    const number2 = Number(SecondDigit.value);
    const Divided = divide(number1, number2);
    Result.textContent = `${number1} + ${number2} = ${Divided}`;
    Operator.textContent = '/'
  })