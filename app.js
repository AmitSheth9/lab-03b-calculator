// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  import {add} from './utils.js';
  import {subtract} from './utils.js'
  import {multiply} from './utils.js'
  import {divide} from './utils.js'
  
  const FirstDigit = document.getElementById('firstdigit');
  const SecondDigit = document.getElementById('seconddigit');
  const Button = document.getElementById('addbutton');
  const Result = document.getElementById('result');

  Button.addEventListener('click', () => {
    const number1 = Number(FirstDigit.value);
    const number2 = Number(SecondDigit.value);
    const sum = add(number1, number2);
    Result.textContent = sum;
    console.log(sum);
    console.log(number1);
  })

  const FirstDigitSub = document.getElementById('firstdigitsub');
  const SecondDigitSub = document.getElementById('seconddigitsub');
  const SubButton = document.getElementById('subbutton');
  const SubResult = document.getElementById('subresult');

  SubButton.addEventListener('click', () => {
    const number1 = Number(FirstDigitSub.value);
    const number2 = Number(SecondDigitSub.value);
    const subtracted = subtract(number1, number2);
    SubResult.textContent = subtracted;
    console.log(subtracted);
    console.log(number1);
  })

  const FirstDigitTimes = document.getElementById('firstdigittimes');
  const SecondDigitTimes = document.getElementById('seconddigittimes');
  const TimesButton = document.getElementById('timesbutton');
  const TimesResult = document.getElementById('timesresult');

  TimesButton.addEventListener('click', () => {
    const number1 = Number(FirstDigitTimes.value);
    const number2 = Number(SecondDigitTimes.value);
    const Multiplied = multiply(number1, number2);
    TimesResult.textContent = Multiplied;
  
  })


  const FirstDigitDivide = document.getElementById('firstdigitdivide');
  const SecondDigitDivide = document.getElementById('seconddigitdivide');
  const DivideButton = document.getElementById('dividebutton');
  const DivideResult = document.getElementById('divideresult');

  DivideButton.addEventListener('click', () => {
    const number1 = Number(FirstDigitDivide.value);
    const number2 = Number(SecondDigitDivide.value);
    const Divided = divide(number1, number2);
    DivideResult.textContent = Divided;
  
  })