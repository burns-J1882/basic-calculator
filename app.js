//basic operator functions
function add (a, b){
    return a + b;
};

function subtract (a, b){
    return a - b;
};

function multiply (a, b){
    return a * b;
};

function divide (a, b){
    return a / b;
}

//function that calls operator function
function operate (operator, a, b){
    return operator(a, b);
}


//functions to make clicked/keyed numbers appear in display
   //each clicked key adds that value to an array
    //display the array as it updates each time 
//click on operator to allow new input
    //first function asks for input to create ['b'] array
    //take input and convert ['a'] array and ['b'] array to integers
//equals sign has click listener
    //calls the function associated with the previous operator
    //passes the a, b arguments
    //returns the value as a replace.Child manipulation

let displayValue = []; 

//initialize display to 0
const display = document.querySelector('.display');
const output = document.createElement('p');
output.textContent = '0';
display.appendChild(output);

//combines an array, use parseFloat() later to factor for decimals
function combinator (arr) {
    let result = arr.reduce((a, b) => a += b);
    return result;
}

//update displayValue on screen
function calcDisplay(arr){
    const oldNum = document.querySelector('p');
    const newNum = document.createElement('p');
    newNum.textContent = combinator(arr);
    oldNum.parentNode.replaceChild(newNum, oldNum);
}

//Clicked button adds the number to ['displayValue'], runs calc display to update DOM
const keyedNum = document.querySelectorAll('.number-key');
    keyedNum.forEach((key) => {
        key.addEventListener('click', () =>{
            displayValue.push(key.id);
            calcDisplay(displayValue);
    })    
})