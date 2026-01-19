// Decision making with JavaScript 

// “Comparison operator”

// 1 > 3 
// false 

// 1 < 3
// true 

// -1 > 20
// false

// -1 > -1
// false 

// -1 <= -1
// true

// -1 <= 10
// true 

// Let age = ?

// age >= 18
// true 

// age 
// 31

// ‘a’
// “a”

// “A” < “a”
// true

// ‘@‘ < ‘A’
// true 

// “Equality operators”

// "double Equality"
// 1 == 1
// true 

// 1 == ‘1’
// true 

// Null == undefined 
// true 

// 1 == 2
// false 

// ‘a’ == ‘b’
// false 

// 0 == false 
// true 

// 1 === 1
// true 

// 1 === "1"
// false 

// 0 === false 
// false 

// 0 == true 
// true

// 1 != 2
// true 

// 1 != ‘2’
// true 

// 1 != ‘1’
// false 

// 1 == ‘1’
// true 

// 1 !== ‘1’
// true 

// 1 === ‘1’
// false 

// "triple and strict double equal sign compares values
// and type" 

// “Console , Alert, prompt”

// console.log (“HELLO”)
// HELLO

// 1 + 4
// 5

// co
// 5 “HI” true

// console.warn ( “UH OH WARNING!” )
// ⚠️ UH OH WARNING!

// AKLSAJDKLAS
// undefined 

// Laksjdakl
// Uncaught error 

// alert ( “HI THERE!” )
// undefined 

// Prompt (“please enter a number”)
// “13”

// let userInput = prompt (“please enter a number”)
// undefined 

// userInput
// “97”

// userInput + 1
// “971”

// parseInt(userInput)
// 97

// parseInt (“101”)
// 101

// parseInt (“101asdasdas”)
// 101

// parseInt (userInput) + 1 
// 98

// “Running JavaScript from a script!”

// “conditionals”
// “If statement”

// let rating = 3;
// If ( rating === 3 )  {
//    console.log (“YOU ARE A SUPERSTAR!”)
// }

// console.log (“IT’S WORKING”)

// console.log (“BEFORE CONDITIONAL”)
// let random = Math.random( );
// if  (random < 0.5) {
//        console.log(“YOUR NUMBER IS LESS THAN 0.5!!!”)
//         console.log (random)
// }

// if (1 + 1 === 2) {
//      console.log (“MATH STILL WORKS!”)
// }
// console.log (“AFTER CONDITIONAL”)

// let random = Math.random( );
// if (random > 0.5) {
//      console.log (“YOUR NUMBER IS GREATER THAN 0.5!!!”)
//    console.log (random);
// }


// “ELSE - if “
// let rating = 2;
// if ( rating === 3 ) {
//       console.log (“YOU ARE A SUPERSTAR”);
//  }
// else if ( rating === 2) {
//       console.log (“MEETS EXPECTATION”);
// }


// const dayOfWeek = ‘Monday’;

// if  (dayOfWeek === ‘Monday’) { 
//       console.log (“UGHH I HATE MONDAYS!”)
// }  else if (dayOfWeek === ‘Saturday’) {
//       console.log (“YAY I LOVE SUPERSTAR!”)
// } else if (dayOfWeek === ‘Friday’) {
//       console.log (“FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!”)


// 0-5 - free 
// 5-10 CHILD $10
// 10 -65 ADULT $20
// 65+ SENIOR $10

// const age = 8;
// if (age < 5) { 
//         console.log(“You are a child. You get in for free!”)
//   } else if (age < 10) {
//        console.log (“You are a child. you pay $10”)
// } else if (age < 65) {
//        console.log (“You are a adult. you pay $20”)



// “else statement”

// const dayOfWeek = ‘Monday’;
// prompt (“ENTER A DAY”).toLowercase( );

// if  (dayOfWeek === ‘Monday’) { 
//       console.log (“UGHH I HATE MONDAYS!”)
// }  else if (dayOfWeek === ‘Saturday’) {
//       console.log (“YAY I LOVE SUPERSTAR!”)
// } else if (dayOfWeek === ‘Friday’) {
//       console.log (“FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!”)
// else  {
//         console.log (“MEH”) 
// }

// const dayOfWeek = prompt  (“ENTER A DAY”);

// if  (dayOfWeek === ‘Monday’) { 
//       console.log (“UGHH I HATE MONDAYS!”)
// }  else if (dayOfWeek === ‘Saturday’) {
//       console.log (“YAY I LOVE SUPERSTAR!”)
// } else if (dayOfWeek === ‘Friday’) {
//       console.log (“FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!”)
// else  {
//         console.log (“MEH”) 
// }


// const dayOfWeek = ‘Monday’;
// prompt (“ENTER A DAY”).toLowercase( );

// if  (dayOfWeek === ‘Monday’) { 
//       console.log (“UGHH I HATE MONDAYS!”)
// }  else if (dayOfWeek === ‘Saturday’) {
//       console.log (“YAY I LOVE SUPERSTAR!”)
// } else if (dayOfWeek === ‘Friday’) {
//       console.log (“FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!”)
// else  {
//         console.log (“MEH”) 
// }


let rating = -99;

if (rating === 3) { 
         console.log (“YOU ARE A SUPERSTAR”);
 }
else if (rating === 2) { 
        console.log (“MEETS EXPECTATIONS”);
}
else if (rating === 1) { 
       console.log (“NEEDS IMPROVEMENT”);
}
else {
      console.log (“INVALID RATING”);
}


// let random = Math.random ( );
// If ( random < 0.5) { 
//       console.log (“YOUR NUMBER IS LESS THAN 0.5!!!”)
//      console.log(random);
// }

// If (random >=0.5 ) {
//       console.log (“YOUR NUMBER IS GREATER THAN 0.5”)
//       console.log (random);
// } else { 
//       console.log (“YOUR NUMBER IS GREATER THAN  (OR EQUAL) THANK YOU 0.5!!
// }
// console.log( random ) ;


// 0-5 - free 
// 5-10 CHILD $10
// 10 -65 ADULT $20
// 65+ SENIOR $10

// const age = 8;
// if (age < 5) { 
//         console.log(“You are a child. You get in for free!”)
//   } else if (age < 10) {
//        console.log (“You are a child. you pay $10”)
// } else if (age < 65) {
//        console.log (“You are a adult. you pay $20”) else { 
//         console.log (“You are a senior. You pay $10)
// }

// “We must always have if statement”


// “Nesting conditionals”

// const password = prompt (“please enter a new password”);

// If  (password.length >= 6) {
//     console.log (“LONG ENOUGH PASSWORD!”)
// } else { 
//     console.log (“PASSWORD TOO SHORT! Must be 6+ characters
// }



// if  (password.indexOf(‘ ') === -1 { 
//        console.log (“Good job! No space!”)
// } else { 
//         console.log ( “password cannot contain spaces!”)
// }



// If  (password.length >= 6) {

// if  (password.indexOf(‘ ') === -1 { 
//        console.log (“valid password ”)
// }  else { 
//         console.log ( “password cannot contain spaces!”)
// }

// }else { console.log (“PASSWORD TOO SHORT! Must be 6+ characters
// }
 

// “Truth -y  & False-y values"

// const  userInput  = prompt (“Enter something")

// if (userInput) {
//      console.log (“TRUTHY")
// } else {
//      console.log (“FALSY”)
// }

// If (0) {
//      console.log (“TRUTHY")
// }
// else { 
//     console.log (“FALSY”)
// }
  

// FALSYNESS

// false
// 0
// “  "
// Null 
// undefined 
// NaN

// “logical operators”
// “logical AND”
// “Both sides must be true”

// 1 <= 4  &&  ‘a' === ‘a' ;

// 9 < 10  &&  9 >= 9 ;

// ‘abc'. length === 3 &&  1 + 1 === 4 ;

// true && true 
// true 

// true && false
// false 

// false && false 
// false 

// false && true 
// false 

// const password = prompt (“Enter your password")
// if ( password.length >= 6 && password.indexOf (‘   ') ===  -1 ) { 
//        console.log (“VALID PASSWORD”)
//         } else { 
//        console.log (“INCORRECT FORMAT FOR PASSWORD”)
// } 


// “logical OR”
// “If one side is true, the entire thing is true”
// true | |  true 
// true 

// true | | false 
// true 

// false | | true 
// true 

// false | | false 
// false 


// 1  !== 1  | |   10 == 10  
// true 

// 10/2 == 5 | |  null
// true 

// 0 | | undefined
// false 


// let age = 76 ;

// if ( age < 6  | |  age >= 65 ) {
//        console.log (‘You get in for free');
// }
// else {
//      console.log (“that will be $10 please”);
// }


// const age = 90;
// if (age < 5  | |   age >= 65) { 
//      console.log (“FREE”);
// } else if  (age < 10) {
//      console.log (“$10”)
// } else if ( age < 65) {
//      console.log (“$20")
//  }


// “logical NOT”
// “expression return true if expression is false”

// ! Null  
// true 

// ! ( 0 === 0) 
// true 

// ! ( 3 <= 4 )
// false 


// false
// false 

// !false
// true 
 
// !(1 === 1)
// false

// null
// null

// let  firstName = prompt (“enter your first name “);
// If ( !firstName) {
//      firstName = prompt (“TRY AGAIN!!!")
// }


// const age = 45;
// if ( !(age >= 0 && age < 5 )   | |   age >= 65)) { 
//      console.log (“YOU ARE NOT A BABY OR SENIOR ”);


// “SWITCH STATEMENT"

// const day = 2;     

// switch (day) {
//       case 1:  
//              console.log (“MONDAY”);
//       case 2:  
//              console.log (“TUESDAY”);
//       case 3:  
//              console.log (“WEDNESDAY”);
//       case 4:  
//              console.log (“THURSDAY”);
//       case 5:  
//              console.log (“FRIDAY”);
// }


// “We have to add break keyword to stop running”

// const day = 2;     

// switch (day) {
//       case 1:  
//              console.log (“MONDAY”);
//              break;
//       case 2:  
//              console.log (“TUESDAY”);
//            break;
//       case 3:  
//              console.log (“WEDNESDAY”);
//             break;
//       case 4:  
//              console.log (“THURSDAY”);
//            break;
//       case 5:  
//              console.log (“FRIDAY”);
//             break;
//        case 6:
//        case 7:
//              console.log (“WEEKEND”);
//             break;
//        default:
//               console.log (“I DONT KNOW THAT")
// }



// 	•	comparison operators 
// 	•	Equality operators 
// 	•	Logical operators 
// 	•	Conditional statement 
// 	•	Nesting conditionals 
// 	•	Truth-y and False-y values 
// 	•	The switch statement 
