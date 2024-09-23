/* 
A functions is a block of reusable code
*/

// function changeGlobalVariable() {
//     return globalThis.x = "World!"
// }

let x = "Hello";

function changeGlobalVariable() {
 return  window.x = "World!";
}

changeGlobalVariable();
console.log(x); // outputs "World!"

console.log("Before calling the function..............");
console.log(x);

console.log(changeGlobalVariable(x));
console.log("After calling the function................");
console.log(x);


// For strings it is a temporary change. The change only occurs only when you are calling the function

let arr = [1,2,3,4,5]

function changeArray(arr) {
    arr[0] = 5
    return arr
}

console.log("Checking if there is change after the function even before calling it............");
console.log(arr);

console.log("Calling the function................");
console.log(changeArray(arr));

console.log("Checking after calling the function..............");
console.log(changeArray(arr));


/* For arrays the change occurs only after calling the function */

let obj = {
    first_name: "Abdulmajid",
    second_name: "Aman",
    age: 20,
    gender: "Male"
}
let text = ""

for (x in obj) {
    text += obj[x] + " "  
}

console.log(text);


console.log(text);


function changeObj(obj) {
    return ( obj.first_name = "Raul",
             obj["second_name"] = "El-magoti",
             obj.age = 21 )
}

console.log("Checking the values before calling the function...............");
console.log(obj);

console.log("Calling the function................");
console.log(changeObj(obj));

console.log("Checking after calling the function.........................");
console.log(obj);


/* For objects you can change the values of it when you pass it as an argument to a function */


let num = 2

function changeNumber(num) {
    num = 2
    console.log(num);
    return num
}


console.log("Checking the value before calling the function");
console.log(num);

console.log("Calling the function");

console.log("Checking the value after calling the function");
console.log(num);


/* For numbers you cannot also change the value
The changes only occur during the time when you are calling a function
*/

















