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

//combine elements in the array so it can be parsed 
function combinator (arr) {
    let result = arr.reduce((a, b) => a += b);
    return result;
}

    /*
click a number to start adding them to firstNum
click an operator to start adding a to Second num
    use the same click listener, if firstNum has something and operator 
    is clicked send the numbers to secondNum
click equals to call the function assigned to the id of the operator button
*/

let obj = {
    firstNum: [],
    secondNum: [],
    operatorClicked : false,
    operatorStorage : ''
};

const numbers = document.querySelectorAll('.number-key');
const operators = document.querySelectorAll('.operator-key');
const equalsKey = document.querySelector('#equals-key');
const display = document.querySelector('.display')

//initialize display to 0
const output = document.createElement('p');
output.textContent = '0';
display.appendChild(output);
//call to update the display
function calcDisplay(obj){
    output.textContent = combinator(obj);
}

//gets the id from the clicked button
//uses the operator clicked to determine where to store the data
//!add a check to skip if theres a second decimal input
numbers.forEach((key) => {
    key.addEventListener('click', (e) => {
        //console.log(e.target.id); //gets the id from the clicked button
        if(obj.operatorClicked === false){ 
            obj.firstNum.push(e.target.id);
            calcDisplay(obj.firstNum);
        } else {
            obj.secondNum.push(e.target.id);
            calcDisplay(obj.secondNum);
        };
    })
})
//checks and switches the operator so the numbers are stored in a different place
operators.forEach((key) => {
    key.addEventListener('click', (e) => {
        if (obj.operatorClicked === false){
            obj.operatorClicked = true;
        }
        //switch statement so each operator can be used on equals key
        switch (e.target.id) {
            case 'addition-key':
                console.log('addition-key clicked');
                obj.operatorStorage = add;
                break;
            case 'minus-key':
                console.log('minus-key clicked'); 
                obj.operatorStorage = subtract;
                break;
            case 'multiply-key':
                console.log('multiply-key clicked');
                obj.operatorStorage = multiply;
                break;
            case 'divide-key':
                console.log('divide-key clicked') 
                obj.operatorStorage = divide;
                break;
            case 'all-clear-key': //resets to the defaults, set screen display to zero
                obj.firstNum = [];
                obj.secondNum = [];
                obj.operatorClicked = false;
                obj.operatorStorage = '';
                output.textContent = '0';
                break;
            case 'delete-key':
                if (obj.operatorClicked === false){
                    //remove last number from firstNum and update display
                }else{
                    //remove last number from secondNum and update display
                }
        }

    })
})

//save output to firstNum if they click another operator, assign new input to second still
equalsKey.addEventListener('click', () =>{
    a = parseFloat(combinator(obj.firstNum)); //parse the number here to make deleting in case of typos easier later
    b = parseFloat(combinator(obj.secondNum));
    result = operate(obj.operatorStorage, a, b); //save output
    output.textContent = result; //output result
    obj.firstNum = [result];
    obj.secondNum = [];
    obj.operatorClicked = false; //allow someone to use the new result
})


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

/*
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
            nums.firstNum.push(key.id);
            calcDisplay(nums.firstNum);
    })    
})

//add key begins adding new strings to nums.secondNum 
const additionKey = document.querySelector('#addition-key');
additionKey.addEventListener('click', () =>{
    keyedNum.forEach((key) => {
        key.addEventListener('click', () =>{
            if(nums.firstNum.length > 1)
            nums.secondNum.push(key.id);
            nums.firstNum.pop();
            calcDisplay(nums.secondNum);
    })    
})
})

const equalsKey = document.querySelector('#equals-key');
equalsKey.addEventListener('click', () => {
    let a = parseFloat(combinator(nums.firstNum));
    let b = parseFloat(combinator(nums.secondNum));
})
*/
