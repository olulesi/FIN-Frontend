// Variable Declarations
let x = 5;
let y = "5"; // y is a string

// Arithmetic Operations
console.log(x + y); // "55" - x is a number, y is a string, so it combines as a string
console.log(x - y); // 0 - JavaScript automatically converts y to number
console.log(x * y); // 25
console.log(x / y); // 1
console.log(x % y); // 0
console.log(x ** y); // 3125 (5 to the power of 5)

// Assignment Operators
x = 5; // Reset x
x = x + y;
console.log("x = x + y:", x); // "55"

x = 5;
x += y;
console.log("x += y:", x); // "55"

x = 5;
x = x - y;
console.log("x = x - y:", x); // 0

x = 5;
x -= y;
console.log("x -= y:", x); // 0

x = 5;
x = x * y;
console.log("x = x * y:", x); // 25

x = 5;
x *= y;
console.log("x *= y:", x); // 25

x = 5;
x = x / y;
console.log("x = x / y:", x); // 1

x = 5;
x /= y;
console.log("x /= y:", x); // 1

x = 5;
x = x % y;
console.log("x = x % y:", x); // 0

x = 5;
x %= y;
console.log("x %= y:", x); // 0

// Comparison Operators
console.log(x > y); // false
console.log(x < y); // false
console.log(x >= y); // true
console.log(x <= y); // true
console.log(x === y); // false (strict equality: type and value must match)
console.log(x != y); // true

// Logical Operators
let age = 20;
let hasId = true;

console.log(age >= 18); // true
console.log(hasId); // true
console.log(age >= 18 && hasId); // true - both must be true

// Login Check Example
let username = "jade";
let password = "1234";
let email = "jadesola@gmail.com";

console.log(username === "jade"); // true
console.log(password === "123"); // false

console.log(
  username === "gold" && password === "1234" && email === "jadesola@gmail.com"
); // false - first condition is false

// OR (||) Operator
let isWeekend = false;
let isHoliday = false;

console.log(isWeekend || isHoliday); // false - both are false

// NOT (!) Operator
let isRaining = false;
console.log(!isRaining); // true

let loggedIn = true;
console.log(!loggedIn); // false

// Ternary Operator
let score = 40;
let grade = score > 50 ? "Pass" : "Fail";
console.log("Grade:", grade); // "Fail"

// if...else Statement
let day = "Sunday";

if (day === "Sunday") {
  console.log("Rest day!");
} else {
  console.log("Work day");
}

// Grade Check with if...else if...else
score = 33;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// switch Statement
day = "Saturday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Saturday":
    console.log("Weekend!");
    break;
  default:
    console.log("Another day");
}

// For Loop - Counts from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("For Loop:", i);
}

// While Loop - Also counts from 1 to 5
let i = 1;
while (i <= 5) {
  console.log("While Loop:", i);
  i++;
}

// Function with Default Parameter
function greet(name = "Person") {
  console.log("Hello", name);
}

greet("Jadesola");
greet("Bolaji");
greet("Dave");
greet(); // uses default value

// Function to Add Two Numbers
function add(a, b) {
  console.log("Sum =", a + b);
}

add(4, 5); // 9
add(6, 2); // 8



