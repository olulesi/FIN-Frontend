// INTRO TO FUNCTION

let die1 = Math.floor(Math.random() * 6) + 1;
let die2 = Math.floor(Math.random() * 6) + 1;
let die3 = Math.floor(Math.random() * 6) + 1;
let die4 = Math.floor(Math.random() * 6) + 1;
let die5 = Math.floor(Math.random() * 6) + 1;
let die6 = Math.floor(Math.random() * 6) + 1;

let die1 = rollDie(6);
let die2 = rollDie(12);
let die3 = rollDie(20);
let die4 = rollDie(20);
let die5 = rollDie();
let die6 = rollDie();



// OUR VERY FIRST FUNCTION

function grumpus () {
    console.log ("ugh, you again");
    console.log ("for the last time" );
    console.log ("LEAVE ME ALONE");
}

function singSong (){
    console.log("DO")
    console.log("RE")
    console.log("MI") 
}



// ARGUMENTS INTRO

function greet() {
    console.log("HI!");
}

// Arguments in Built-in Methods
"hello".indexOf('H') 
[1, 2, 3].push(4)

let nums = [1, 2, 3, 4]

nums.push(5, 6, 7);


//Defining Arguments in Our Own Functions

function greet(firstName) {
    console.log(`firstName is: ${firstName}`);
}

greet('Elvis') 


function greet(idiotPerson) {
    console.log(`firstName is: ${idiotPerson}`);
}

greet('idiotPerson'), 

//What Happens If No Argument Is Passed?
function greet(firstName) {
    console.log(`Hey there, ${firstName}!`);
}

greet() 



// FUNCTION WITH MULTIPLE ARGUMENT

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0].}!`);
}

greet('George', 'Clooney') 
greet('Presley', 'Elvis') 
greet('Elvis', 'Presley') 

function greet(firstName, lastName) {
    console.log("Hey there, " + firstName + " " + lastName[0] + ".");
}

greet('George', 'Clooney') 
greet('Presley', 'Elvis') 
greet('Elvis', 'Presley') 


//Functions with Different Argument Types

function repeat(str, numTimes) {
    let result = "";
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

repeat('$', 5) 
repeat('I love my chickens ', 10)



//Omitting Arguments and Resulting Errors
function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0].}!`);
}

//If an argument is omitted, its value will be undefined. Using undefined in code, 
// such as accessing undefined[0], will cause a runtime error.

greet('Arsene', 'Wenger');  //The first call works as expected, 
greet('Arsene'); //the second call results in an error: "Cannot read property '0' of undefined."
//  This is because lastName is undefined, and attempting to access lastName[0] fails.



// RETURN KEYWORD
//The return keyword is a crucial part of writing functions. 
// It allows us to have both inputs and an output. For example,
//  we can write a function that returns x + y.

function add(x, y) {
    return x + y;
}

//Alternatively, we can use two lines to separate the calculation and the return statement

function add(x, y) {
    let sum = x + y;
    return sum;	
}

add(9, 4) //Calling add(9, 4) now returns 13. 
const sum = add(9, 4)// If we save the result to a variable, such as const sum = add(9, 4),
//  the variable sum will hold the value 13. This demonstrates how we can export a value out of a function.


//Return Stops Function Execution
function add(x, y) {
    return x + y;
    console.log('End of function'); // This line will never run
}


function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    let sum = x + y;
     return sum;
}

add(9, 4)  // 13
add(9, 'a') // false
add(add(1, 5), 9);// 15


//Only One Value Can Be Returned

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    
     return x + y;
}


//Chaining and Capturing Return Values

let total = add(add(1, 5), 9);  //In this example, add(1, 5) evaluates to 6,
//  and then add(6, 9) evaluates to 15. The value 15 is saved in the variable total.
//  This is different from simply printing values, 
// as the result is actually saved and can be used further









