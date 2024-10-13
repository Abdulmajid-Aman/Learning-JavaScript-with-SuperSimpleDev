// [10, 20, 30] => An example of an Array
const array = [1, 2, 3, 4, 5]
console.log(array);


// Best way to check if an item is an array => Array.isarray(array)
// Array method
// push() adds the last item
// splice(0, 2) removes the number of items specified from the specified start position
// pop() removes the last item



// First Project
const form = document.querySelector('#one')
const input = document.querySelector('#first')
let firstList = []

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let inputValue = input.value
    if (inputValue) {
        firstList.push(inputValue)
        input.value = ''
        console.log(firstList);
        
        return inputValue
    }
    console.log('Cannot Submit an Empty Form')
})

// Second Project
const formTwo = document.querySelector('#two')
const inputTwo = document.querySelector('#second')
const p = document.querySelector('.list-items')
secondList = []
let i = 0


formTwo.addEventListener('submit', (e) => {
    e.preventDefault()
    let inputValue = inputTwo.value
    if (inputValue) {
        secondList.push(inputValue)
        let li = document.createElement('li')
        li.textContent = secondList[i]
        p.appendChild(li)
        inputTwo.value = ''
        i++
    }
    console.log('Cannot submit an empty form');
})


// Third project
const formThree = document.querySelector('.three');
const inputThree = document.querySelector('.third');
const date = document.querySelector('.date');
let main = document.querySelector('.card');

let arr = [];

formThree.addEventListener('submit', (e) => {
    e.preventDefault();
    let dateValue = date.value;
    let inputValue = inputThree.value;
    if (dateValue && inputValue) {
        arr.push({ date: dateValue, task: inputValue });
        renderList();
        date.value = '';
        inputThree.value = '';
    }
    console.log(arr);
});

function renderList() {
    main.innerHTML = ''; 
    arr.forEach((item, index) => {
        let div = `<div>
            <span> ${item.task} ${item.date} <button onclick="handleDelete(${index})"> Delete </button> </span>
            </div>`;
        main.innerHTML += div;
    });
}

function handleDelete(index) {
    arr.splice(index, 1); 
    renderList(); 
}
