// Booleans have a value of either true or false
/* 
Comparison operators
=====================
Greater than >
Less than <
Greater than or equal to >=
Less than or equal to <=
Equal to ==
Not equal to !=
Strictly equal to ===
Strictly not equal to !==

Logical operators
================
And && returns falsely values or the right side
Or || returns truthy values or the right side
Not !
*/

// console.log(5 !== '5.00');

/* 
If statements
================
if (true) {
    console.log('Hello)
}
    Output Hello
*/
/* if (false) {
    console.log('Hello')
} else {
    console.log('Goodbye')
} */

    // if (0 >= 16) {
    //     console.log('You are an adult');
    // } else {
    //     console.log('You are a minor still 🤣')
    // }

 // Rock Paper Scissor Logic
 // 1. Simple Version
    let rock = document.querySelector('.rock-icon').textContent
    let paper = document.querySelector('.paper-icon').textContent
    let scissors = document.querySelector(".scissors-icon").textContent
    let p = document.querySelector('.second')


    let buttons = document.querySelector('.buttons')


    let array = [rock, paper, scissors]
    let index = Math.floor(Math.random() * 3)
    let compPick = array[index]

    let userPick; 

    buttons.addEventListener('click', (e) => {
        console.log(userPick = e.target.textContent)

        if (userPick === "Rock" && compPick === "Paper") {
            p.textContent = `You picked ${userPick}. Computer picked ${compPick}. You lose.`
        } else if(userPick === "Paper" && compPick === "Rock") {
            p.textContent = `You picked ${userPick}. Computer picked ${compPick}. You win.`
        } else if(userPick === "Rock" && compPick === "Scissors") {
            p.textContent = `You picked ${userPick}. Computer picked ${compPick}. You win.`
        } else if (userPick === "Scissors" && compPick === "Rock") {
            p.textContent = `You picked ${userPick}. Computer picked ${compPick}. You lose.`
        } else if (userPick === "Scissors" && compPick === "Paper") {
            p.textContent = `You picked ${userPick}. Computer picked ${compPick}. You win.`
        } else if (userPick === "Paper" && compPick === "Scissors") {
            p.textContent = `You picked ${userPick}. Computer picked ${compPick}. You lose.`
        } else {
            p.textContent = "It's a Tie!"
        }
    })

// 2. Another method 
let gameIcons = document.querySelector('.game-icons')

let rockValue = document.querySelector('.rock').textContent
let paperValue = document.querySelector('.paper').textContent
let scissorsValue = document.querySelector('.scissors').textContent


let arrayOfIcons = [rockValue, paperValue, scissorsValue]
let wins = 0
let compWins = 0
let ties = 0

let counter = document.querySelector('.counter')

let message = document.querySelector('.status')

let resetBtn = document.querySelector('.reset')

resetBtn.addEventListener('click', () => {
    wins = 0
    compWins = 0
    ties = 0
    counter.textContent = `Wins: ${wins} Loses: ${compWins} Ties: ${ties}`
})

gameIcons.addEventListener('click', (e) => {
    let userChoice = e.target.textContent
    let number = Math.floor(Math.random() * 3)
    let computer = arrayOfIcons[number]

    if(userChoice === rockValue && computer === scissorsValue || 
       userChoice === scissorsValue && computer === paperValue ||
       userChoice === paperValue && computer === rockValue 
    ) {
        message.textContent = "You win"
        wins++
        counter.textContent = `Wins: ${wins} Loses: ${compWins} Ties: ${ties}`
        console.log("You win");
    } else if (userChoice === scissorsValue && computer === rockValue || 
               userChoice === paperValue && computer === scissorsValue || 
               userChoice === rockValue && computer === paperValue
    ) {
        message.textContent = "You lose"
        compWins++
        counter.textContent = `Wins: ${wins} Loses: ${compWins} Ties: ${ties}`
        console.log("You have lost"); 
    } else {
        message.textContent = "It's a tie"
        ties++
        counter.textContent = `Wins: ${wins} Loses: ${compWins} Ties: ${ties}`
        console.log("It's is a tie");
        
    }
})

// Shortcuts for if statements
/* 
1. Ternary statements ? :
2. Guard statements &&
3. Default statements ||
*/

/* 
Ternary operator
==================
true ? 'truthy' : 'falsely
// returns 'truthy'
=> Can be saved to a variable

Guard Operator
===============
it has a special feature in which it returns a falsy value. It short circuits the expression. It can also be stored in a variable
const message = false && console.log("Hello")
returns false
*/

// Exercise
//===============

/* 
1. Create a variable called 'hour' and save the current hour of the day (use 24-hour format and save it as a number between 0 and 23).
   .If hour is between 6 and 12. display 'Good morning! in the console
   .If hour is between 13 and 17, display 'Good afternoon! in the console
   .Otherwise, display 'Good night! in the console

1b. Create a variable called name and save your name inside a string. Update the if statements to display your name inside the messages in the console with each message.
*/

let hour = new Date().getHours()
let name = 'Abdulmajid'


let greeting =  hour >= 6 && hour <= 12 ? `Good morning! ${name}` : hour >= 13 &&  hour <= 17 ? `Good afternoon!  ${name}` : `Good night! ${name}`
console.log(greeting);

/* 
2. Imagine and amusement park that has a discount for children (6 years and younger) or seniors(65 years and older).
    .Create a variable age and save a persons age inside
    .Create and if statement that checks if the person qualifies for a discount. If they do, display discount in the console. Otherwise display no discount

2b. Update the code so that the discount is only available if it is not on a holiday. Create a variable const isHoliday = true
*/

let age = 1
let isHoliday = false

let discount = (age < 6 || age > 65) && !isHoliday ? 'Discount' : 'No discount'

console.log(discount);

/* 
Coin-flip game
================
3. Generate a random number with Math.random(). Save it in a variable
.Create a variable called result and save the result of the coin flip in it. 
.If the number is less than 0.5, save 'Heads' in the console
.else display tails

Create a new variable and call it guess. Give it either heads or tails as your guess
.If your guess matches the result, display you win
.else display you lose
*/

let no = Math.random()
console.log(no);


let result = no < 0.5 ? 'Heads' : 'Tails'
console.log(result);

let guess = 'Heads'

let answer = guess === result ? 'You win' : 'You lose'
console.log(answer);











 