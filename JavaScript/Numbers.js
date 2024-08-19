// Data types in JavaScript
/* 
1. Numbers => 1,2,3
2. Strings => 'Aman'
3. Null
4. Undefined 
5. Objects => {}, []
6. Booleans => true and false
7. bigints => 99n
8.Symbol
*/

// Lesson 2
// Math and Numbers
/* 
Math operators
Mathematic operations follow BODMAS => this is called order of precedence
Add => +. It can also be used for string concatenation
Subtraction => -
Division => /
Multiplication => *
Association operator => ()
Integers => 2,3,4
Floating numbers/ decimal numbers => 2.333, 3.455
When working with money , use cents and convert it back to the original currency

Math Methods
Math.round() => rounds a numbers to the nearest integer
Math.ceil() => rounds a number up regardless of the position
Math.trunc => removes the decimal places
Math.floor() => removers the decimal places
Math.sign() => returns null if number is negative and 1 if the numbers is positive
*/

// let x = 10
// let y = 20
// let result = "The result is: " + x + y
// console.log(result);
// Output is The result is: 1020 => This is because you are adding a number to a string which will perform a concatenation operation

// let x = 10
// let y = 20
// let z = "30"
// let result  = x + y + z
// console.log(result);
// Output is 3030 => This is because the first two variables are numbers so it will add them normally. However, the third variable is a string, so it will perform a concatenation operation. However, if any of the first two variable was a string, concatenation operation would have occurred instead

// In other operations, javascript will convert the strings to numbers to perform the operation
// SUBTRACTION =>
// let x = "10"
// let y = "2"
// let z = x - y
// console.log(z);
// Output is 8. The eight is also a numbers and not a string
// MULTIPLICATION =>
// let x = "10"
// let y = "20"
// let z = x * y
// console.log(z);
// Output is 200. The two hundred is of the data type number. The same will also apply to division

// Type of Nan is number and Type of infinity is a number also

// Number methods 
/* 
1. isInteger() => checks whether a number is an integer
2. toString() => returns a number as a string
3. toFixed() => return a number written in number of decimal places
4, valueOf() => return a number as a number
5. toExponential() => returns a number written in exponential form
6. toPrecision() => returns a number written in a specified length
*/

// let x = 1000
// let y = x.toExponential(2)
// let z = x.toExponential(4)
// console.log("y", y, "z", z)
// y => 1.00e+3
// z => 1.000e+4
// It looks that the number you pass determines the decimal places and the exponential will be the the number you will multiply to get to the original value

// let x = 9.555
// let y = x.toPrecision(2)
// let z = x.toPrecision(4)
// console.log("y", y, "z", z);
// Output for y is 9.6 and the output for z is 9.555. This method returns a number with a precision of the argument passed to it. If the number is less zeros will be added as placeholders

// Number methods cannot be used with variable. Only the keyword Number
// Converting data to numbers
// Number()
// parseInt() => you can pass many numbers but only the first number is returned
// parseFloat()