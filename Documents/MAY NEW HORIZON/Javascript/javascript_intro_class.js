// JavaScript Introduction - Recap from 4-Hour Class

// 1. Variables and Data Types
// Declaring variables using let and const
let name = "John";
const age = 25;

// Different data types
let isStudent = true; // Boolean
let score = 95.5;     // Number
let city = "Lagos";   // String
let x = null;         // Null
let y;                // Undefined

// 2. Console.log and Comments
// Printing values to the console
console.log("Hello, world!");
console.log("Name:", name);
console.log("Age:", age);

// Single-line comment
// This is a comment in JavaScript

/* Multi-line 
   comment explaining more details */

// 3. Arithmetic Operators
let a = 10;
let b = 5;
console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Quotient:", a / b);
console.log("Remainder:", a % b);

// 4. Assignment Operators
let c = 10;
c += 5; // same as c = c + 5
console.log("c after += 5:", c);
c *= 2; // same as c = c * 2
console.log("c after *= 2:", c);

// 5. Comparison Operators
console.log("Is a equal to b?", a == b);
console.log("Is a not equal to b?", a != b);
console.log("Is a greater than b?", a > b);
console.log("Is a less than or equal to b?", a <= b);

// 6. Logical Operators
let hasID = true;
let isAbove18 = false;
console.log("Has ID and is above 18:", hasID && isAbove18);
console.log("Has ID or is above 18:", hasID || isAbove18);
console.log("Not isAbove18:", !isAbove18);

// 7. String Operators
let firstName = "Jane";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

// 8. typeof Operator
console.log(typeof name); // string
console.log(typeof age);  // number
console.log(typeof isStudent); // boolean
