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
// Getting the game values
let rockValue = document.querySelector('.rock').textContent
let paperValue = document.querySelector('.paper').textContent
let scissorsValue = document.querySelector(".scissors").textContent


let gameIcons = document.querySelector('.game-icons')

// Game status
let game = document.querySelector('.status')

// Getting scoreboard
let winElm = document.querySelector('.win')
let loseElm = document.querySelector('.lose')
let tiesElm = document.querySelector('.ties')

let win = 0
let ties = 0
let lose = 0

// Getting the picks 
let userPicked = document.querySelector('.picked') 
let compPicked = document.querySelector('.comp-picked')
let user_picked;


let compChoices = [rockValue, paperValue, scissorsValue]
let computer = compChoices[index]

// gameIcons.addEventListener('click', (e) => {
//     user_picked = e.target.textContent

//     if(user_picked === rockValue && computer === paperValue) {
//         game.textContent = "You lose."
//         lose++
        
//     } else if (user_picked === paperValue && computer === rockValue) {
//         game.textContent = "You win."
//         win++
     
//     } else if (user_picked === rockValue && computer === scissorsValue) {
//         game.textContent = "You win."
//         win++
       
//     } else if (user_picked === paperValue && computer === scissorsValue) {
//         game.textContent = "You lose."
//         lose++
      
//     } else if (user_picked === scissorsValue && computer === paperValue) {
//         game.textContent = "You win."
//         win++
        
//     } else if (user_picked === scissorsValue && computer === rockValue) {
//         game.textContent = "You lose."
//         lose++
     
//     } else {
//         game.textContent = "It's a tie."
//         ties++
    
//     }

//     userPicked.textContent = user_picked
//     compPicked.textContent = computer
//     winElm.textContent = win
//     loseElm.textContent = lose
//     tiesElm.textContent = ties
// }) 

// Using the logical OR operator 
gameIcons.addEventListener('click', (e) => {
    user_picked = e.target.textContent

    // Logic for User Winning
    if(user_picked === rockValue && computer === scissorsValue || user_picked === paperValue && computer === rockValue || user_picked === scissorsValue && computer === paperValue) {
        game.textContent = "You win."
        win++
        // Logic for computer winning
    } else if (computer === rockValue && user_picked === scissorsValue || computer === paperValue && user_picked === rockValue || computer === scissorsValue && user_picked === paperValue) {
        game.textContent = "You lose."
        lose++
    } else {
        game.textContent = "It's a tie."
        ties++
    }
    userPicked.textContent = user_picked
    compPicked.textContent = computer
    winElm.textContent = win
    loseElm.textContent = lose
    tiesElm.textContent = ties
    })

    let resetBtn = document.querySelector('.reset') 

    function handleClick() {
        win = 0
        lose = 0
        ties = 0
        winElm.textContent = win
        loseElm.textContent = lose
        tiesElm.textContent = ties
    }

    resetBtn.addEventListener('click', handleClick)





 