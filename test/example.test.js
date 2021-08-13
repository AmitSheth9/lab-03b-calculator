// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add , subtract, multiply, divide} from "./utils";
const test = QUnit.test;

test('add 3 and 4', function(expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 7;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(3,4)

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtract 90 from 99', (expect) => {
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