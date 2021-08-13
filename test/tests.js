
//import "./example.test.js";

import {add, subtract, multiply, divide} from "../utils.js"

const test = QUnit.test;


test('add 3 and 4', (expect) => {
    
    const expected = 7;
    
   
    const actual = add(3,4)

    
    expect.equal(actual, expected);
});

test('subtract 90 from 99', function (expect) {
    const expected = 9;
    const actual = subtract(99,90);
    expect.equal(actual, expected);
});

test('multiply 5 and 9', (expect) => {
    const expected = 45;
    const actual = multiply(5,9);
    expect.equal(actual, expected);
});

test('divide 45 by 5', (expect) => {
    const expected = 9;
    const actual = divide(45,5);
    expect.equal(actual, expected);
});