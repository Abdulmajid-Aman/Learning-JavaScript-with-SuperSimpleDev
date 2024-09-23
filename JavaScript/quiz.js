/* 
Functions (3 questions)
1. Write a function that takes a single argument name and returns a greeting message. Example: greet("Alice") should return "Hello, Alice!"

2. Write a function that takes two arguments a and b and returns their sum. Example: add(2, 3) should return 5

3. Write a function that takes a single argument age and returns true if the person is an adult (18 or older) and false otherwise. Example: isAdult(25) should return true

 */

function greet(name) {
    return `Hello, ${name}`
}

function add(a, b) {
    return a + b
}

function isAdult(age) {
    return age > 18 ? true : false
}



/* 
Booleans (2 questions)
1. Write a conditional statement that checks if a variable isAdmin is true and logs "You are an admin!" to the console if it is. Example: isAdmin = true should log "You are an admin!"

2. Write a conditional statement that checks if a variable isMember is false and logs "You are not a member!" to the console if it is. Example: isMember = false should log "You are not a member!"
*/

function check_admin() {
    if (isAdmin) {
        console.log('You are an admin!');
        
    }
}

function check_member() {
    if (!isMember) {
        console.log('You are not a member');
        
    }
}


/* 
Strings (2 questions)
Write a function that takes a single argument str and returns the string in uppercase. Example: toUpper("hello") should return "HELLO"

Write a function that takes two arguments str1 and str2 and returns the concatenation of the two strings. Example: concat("Hello, ", "world!") should return "Hello, world!"
*/

function toUpper(str) {
    return str.toUpperCase()
}

function concat(str, str2) {
    return str + str2
}


/* 
Numbers (3 questions)
Write a function that takes a single argument num and returns its square. Example: square(4) should return 16

Write a function that takes two arguments a and b and returns their product. Example: multiply(2, 3) should return 6

Write a function that takes a single argument num and returns true if it's an even number and false otherwise. Example: isEven(4) should return true
*/

function square(num) {
    return Math.pow(num, 2)
}

function multiply(num, num2) {
    return num * num2
}

function isEven(num) {
    return num % 2 == 0 ? true : false
}

//======================================================================================================================================================================

/* 
Functions (3 questions)

Write a function that takes a single argument arr and returns the sum of all elements in the array. Example: sumArray([1, 2, 3, 4, 5]) should return 15

Write a function that takes two arguments obj and key and returns the value of the property with the given key from the object. Example: getProperty({ name: 'John', age: 30 }, 'age') should return 30

Write a function that takes a single argument str and returns the string with all vowels removed. Example: removeVowels("hello world") should return "hll wrld"
*/

function sumArray(arr) {
    return arr.reduce((a, b) => a + b)
}

function getProperty(obj, key) {
    return obj[key]
}

function removeVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let result = str
    for (let char of vowels) {
         while (result.includes(char)) {
            result = result.replace(char, '')
         }
    }
}