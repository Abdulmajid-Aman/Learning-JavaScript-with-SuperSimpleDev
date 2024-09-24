// let body = document.body

// console.log(body.innerHTML);
// document.title = 'Hello from the title'




// let p = document.createElement('p')
// body.append(p)
// p.innerHTML = `<button>Hello</button>
// <div className = "What">Div in the button </div>`


// let p2 = document.createElement('p')
// p2.innerText = 'I am the newly create div'
// body.append(p2)

// console.log(p);
// console.log(body.innerHTML);
// console.log(body.innerText);
// console.log(body.textContent);

// let div = document.querySelector('.name')

// console.log(div.textContent);
// console.log(div.innerHTML);
// console.log(div.innerText);


// let children = body.children // Gives me the HTML collection
// let nodes = body.childNodes // Gives me the Node list
// console.log(nodes);
// console.log(children);








/* Difference between textContent, innerHTML and innerText
textContent: Returns the text content of a node and its descendants, without any formatting or rendering considerations. It doesn't recognize HTML elements and treats them as plain text.
innerHTML: Returns the HTML content of an element, including any HTML tags. It recognizes HTML elements and returns them as part of the content.
innerText: Returns the rendered text content of a node and its descendants, trying to match what's rendered in the browser. It doesn't return HTML tags, but it does take into account formatting and rendering considerations, such as line breaks and whitespace.
*/



// Whenever you use the DOM, the html elements are converted to objects

// Properties and method of the DOM
/* 
1. Document.title => Returns the title of the page
2. Document.body => It will get the body of the HTML document

Methods
========
*/


// Project 1
let btn = document.querySelector('.btn')
let text = 'Subscribed'
let counter = 0

btn.addEventListener('click', (e) => {
    counter++
    if(counter % 2 === 0 ) {
        btn.textContent = 'Subscribe'
    } else {
        btn.textContent = text
    }
})


// Project 2

// Getting the game btns
let rock = document.querySelector('.rock').textContent
let paper = document.querySelector('.paper').textContent
let scissors = document.querySelector('.scissors').textContent
let resetBtn = document.querySelector('.reset')
let container = document.querySelector('.btns')

// Getting the game scores
let win = document.querySelector('.win').textContent
let losses = document.querySelector('.losses').textContent
let ties = document.querySelector('.ties').textContent

// Getting the result
let statusScore = document.querySelector('.status')

let result = document.querySelector('.result')
let scoreboard = document.querySelector('.scoreboard')

// Setting the scoreboard
let results = JSON.parse(localStorage.getItem('results')) || {
    win: 0,
    losses: 0,
    ties: 0
}
scoreboard.textContent = `Wins: ${results.win}. Losses: ${results.losses}, Ties: ${results.ties}`

let gameChoices = [rock, paper, scissors]

let children = container.children

for(let i = 0; i < children.length; i++) {
    children[i].addEventListener('click', () => {
        let index = Math.floor(Math.random() * gameChoices.length)
        let computer = gameChoices[index]
        let user = children[i].textContent
        
        // Instances where user wins
        if((user === rock && computer === scissors) || (user === paper && computer === rock) || (user === scissors && computer === paper)) {
            results.win++
            statusScore.textContent = 'You win.'
            result.textContent = `You ${user} - ${computer} Computer`
            scoreboard.textContent = `Wins: ${results.win}. Losses: ${results.losses}, Ties: ${results.ties}`
        } else if((computer === rock && user === scissors) || (computer === paper && user === rock) || (computer === scissors && user === paper)) {
            results.losses++
            statusScore.textContent = 'You Lose.'
            result.textContent = `You ${user} - ${computer} Computer`
            scoreboard.textContent = `Wins: ${results.win}. Losses: ${results.losses}, Ties: ${results.ties}`
        } else {
            results.ties++
            statusScore.textContent = "It's a Tie."
            result.textContent = `You ${user} - ${computer} Computer`
            scoreboard.textContent = `Wins: ${results.win}. Losses: ${results.losses}, Ties: ${results.ties}`
        }

        localStorage.setItem('results', JSON.stringify(results))
    })
}

// Resetting the score
resetBtn.addEventListener('click', () => {
    localStorage.removeItem('results')
    results = {
        win: 0,
        losses: 0,
        ties: 0
    }
    localStorage.setItem('results', JSON.stringify(results))
    scoreboard.textContent = `Wins: ${results.win}. Losses: ${results.losses}, Ties: ${results.ties}`
})


// Project 3
let total = document.querySelector('.total')
let inputEl = document.querySelector('input')

const shippingEl = 10

let calcBtn = document.querySelector('.calcBtn')


calcBtn.addEventListener('click', calculateTotal
)

function calculateTotal() {
    let order = Number(inputEl.value)
    let amount = order > 40 ? order : (order + shippingEl)
    total.textContent = `$${amount}`
}

inputEl.addEventListener('keydown', (e) => {  
    return e.key === 'Enter' ? calculateTotal() : null
})


// Questions to practice on
// 1. Create a <button>9a</button>. Use the document.querySelector('button) to get the button from the page, and then display it in the console

let a = document.querySelector('.a')
console.log(a);


// 2. Continuing from 1, create another button <button>9b</button> below. Using JavaScript, change the text in the second button to '9b done!'.

let b = document.querySelector('.b')
b.textContent = '9b done!'

// 3. Create 2 buttons 'heads' and 'tails', and a paragraph(<p></p>) underneath. When clicking the 'buttons' button, display 'You choose: heads;' and vice versa

let heads = document.querySelector('.heads')
let tails = document.querySelector('.tails')
let choice = document.querySelector('.choice')
let buttons = document.querySelector('.game')

let child = buttons.children

for(let i = 0; i < child.length; i ++) {
    child[i].addEventListener('click', (e) => {
        choice.textContent = `You chose: ${e.target.textContent}`
    })
}

// 4. Create a text box and a submit button. When clicking 'Submit', display 'Your name is ${text}' on the page

let input = document.querySelector('.input')
let submit = document.querySelector('.submit')
let p = document.querySelector('.name')

submit.addEventListener('click', () => {
    p.textContent = `Your name: ${input.value}`
    console.log(p.textContent);
    console.log(input.value);
    
})