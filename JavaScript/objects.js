/* // Getting the user choices 
let rock = document.querySelector('.rock').textContent
let paper = document.querySelector('.paper').textContent
let scissors = document.querySelector('.scissors').textContent
let resetBtn = document.querySelector('.reset')
let div = document.querySelector('.game-button')

// Setting the user choices
let gameChoices = [rock, paper, scissors]

// Initializing the win, lose and ties counter
let obj = {
    win: 0,
    lose: 0,
    ties: 0
}

// The event listener to start the game
div.addEventListener('click', (e) => {
    // Getting the user choice
    let userChoice = e.target.textContent

    // Generating a random number
    let index = Math.floor(Math.random() * 2)

    // Setting the computer choice after number generation
    let computer = gameChoices[index]

    // Circumstances where the user wins
    if((userChoice === scissors && computer === paper) || (userChoice === rock && computer === scissors) || (userChoice === paper && computer === rock)) {
        obj.win++ 
        alert(`You have picked ${userChoice}. Computer has picked ${computer}. ${userChoice} beats ${computer}\nWins: ${obj.win}: Lose: ${obj.lose} Ties: ${obj.ties}`)
    } else if ((computer === scissors && userChoice === paper) || (computer === rock && userChoice === scissors) || (computer === paper && userChoice === rock)) {
        obj.lose++
        alert(`You have picked ${userChoice}. Computer has picked ${computer}. ${computer} beats ${userChoice}\nWins: ${obj.win}: Lose: ${obj.lose} Ties: ${obj.ties}`)
    } else {
        obj.ties ++
        alert(`You have picked ${userChoice}. Computer has picked ${computer}. It's a Draw\nWins: ${obj.win}: Lose: ${obj.lose} Ties: ${obj.ties}`)
    }   
})

// Resetting the game score
resetBtn.addEventListener('click', () => {
    obj.win = 0
    obj.lose = 0
    obj.ties = 0
    alert('You have reset the game scores')
})
 */
// ====================================================================================================================================================
let rock = document.querySelector('.rock').textContent
let paper = document.querySelector('.paper').textContent
let scissors = document.querySelector('.scissors').textContent
let resetBtn = document.querySelector('.reset')

let container = document.querySelector('.game-button')
let containerEl = container.children
let message;

// Setting the game scores
let gameStatus = JSON.parse(localStorage.getItem('gameStatus')) || {
    win: 0,
    lose: 0,
    ties: 0
}



// Setting the game choices
let choices = [rock, paper, scissors]

// Adding event listeners to the buttons
for (let i = 0; i < containerEl.length; i++) {
  // Adding Event listeners to each button
  containerEl[i].addEventListener('click', () => {
    let index = Math.floor(Math.random() * 3)
    let userChoice = containerEl[i].textContent
    let computer = choices[index]
    
    // Setting the game Logic
    // Instances where the user wins
    if ((userChoice === rock && computer === scissors) || (userChoice === paper && computer === rock) || (userChoice === scissors && computer === paper)) {
      gameStatus.win++
      message = alert(`You win. You picked ${userChoice} and computer picked ${computer}. ${userChoice} beats ${computer}. 
Wins: ${gameStatus.win} Lose: ${gameStatus.lose} Ties: ${gameStatus.ties}`)
      // Instances when the computer wins
    } else if ((computer === rock && userChoice === scissors) || (computer === paper && userChoice === rock) || (computer === scissors && userChoice === paper)) {
      gameStatus.lose++
      message = alert(`You lose. You picked ${userChoice} and computer picked ${computer}. ${computer} beats ${userChoice}. 
Wins: ${gameStatus.win} Lose: ${gameStatus.lose} Ties: ${gameStatus.ties}`)
      // Instances when it is a tie
    } else {
      gameStatus.ties++
      message = alert(`It's a tie. You picked ${userChoice} and computer picked ${computer}. Nobody won.
Wins: ${gameStatus.win} Lose: ${gameStatus.lose} Ties: ${gameStatus.ties}`)
    }

    localStorage.setItem('gameStatus', JSON.stringify(gameStatus))
  })
  
}

// Adding Event listener to the reset button
resetBtn.addEventListener('click', () => {
  localStorage.removeItem('gameStatus')
  gameStatus = { win: 0, lose: 0, ties: 0 }
  localStorage.setItem('gameStatus', JSON.stringify(gameStatus))
  alert(`Game Reset. Wins: ${gameStatus.win} Lose: ${gameStatus.lose} Ties: ${gameStatus.ties}`)
})

// ======================================================================================================================================================================


// Exercises 
// 1. Let's say in the amazon project, we have a basketball product. This product has a name of 'basketball', a price of 2095 cents. Create an object to represent this product and display in the console.


const product = {
    name: 'basketball',
    price: '20.95'
}

// Continuing from 1, let's say we want to increase the price by 500 cents. Use dot notation to increase the price, and display the updated object in the console.

let { price } = product
let newPrice = parseFloat(price) + 5
product.price = newPrice
console.log(product);

// Using bracket notation, add a property 'delivery-time' to the object with a value '3 days'. Display the updated object in the console.

product['delivery-time'] = '3 days'
console.log(product);

// Create a function 'comparePrice(product1, product2)', which takes two arguments products(with 'name' nad 'price properties) and returns the product that is less expensive. Create 2 products and try out the function.


const product2 = {
    name: 'Book',
    price: '55.00'
}


function comparePrice(product1, product2) {
    if(parseFloat(product1.price > parseFloat(product2))) {
        return product2
    } else {
        return product1
    }
}

console.log(comparePrice(product, product2));


// Create a function 'isSameProduct(product1, product2)', which returns true if 2 products have the same value inside ('name' and 'price'). If not, return false

function isSameProduct(product1, product2) {
    return product1 == product2 ? true : false
}

// Search how to repeat a string many times
function repeatString(word, n) {
    return word.repeat(n)
}

// We'll improve the coin flip game we made. Create 2 buttons to play the game 'heads' and 'tails'. When clicking 'heads' play the game with guess === 'heads'. When clicking 'tails' play the game with guess === 'tails. Create a function 'playGame(guess) to reuse the code

// Create a score object {wins : 0, losses: 0}, update the score each time after, and displaying the score in the console.

// Use localStorage to save  and load the score(hint: you'll need to use each time JSON.stringify() to convert the score object to a string)

let heads = document.querySelector('.heads').textContent
let tails = document.querySelector('.tails').textContent
let btn = document.querySelector('.tails-buttons')
let btnChildren = btn.children

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    lose: 0
}

for(let i = 0; i < btnChildren.length; i ++) {
    btnChildren[i].addEventListener('click', (e) => {
        playGame(e.target.textContent)
    })
}

function playGame(guess) {
    let choices = [heads, tails]
    let randomChoice = Math.floor(Math.random() * btnChildren.length)
    let computer = choices[randomChoice]
    let userChoice = guess

    if (userChoice === heads && computer === tails) {
        score.wins += 1
        alert(`You win \n 
            Win: ${score.wins} Lose: ${score.lose}`)
    } else {
        score.lose ++
        alert(`You lose \n 
            Win: ${score.wins} Lose: ${score.lose}`)
    }

    localStorage.setItem('score', JSON.stringify(score))
}















