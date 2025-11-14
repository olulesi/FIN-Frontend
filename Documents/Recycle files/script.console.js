//FUNCTION IN JAVASCRIPT

//our first javascript function
// function frontEndSkills () {
//     console.log ("HTML")
//     console.log ("CSS")
//     console.log("JAVASCRIPT")
//     console.log("REACT")
//     console.log("BOOTSTRAP")
//     console.log("MONGO")
//     console.log("NODE")
// }

// frontEndSkills()
// frontEndSkills()
// frontEndSkills()
// frontEndSkills()

//function with argument

function greet(firstname) {
    console.log(`Good Evening, ${firstname}
    Hope your are having a great day!`)
}

greet (`Miracle`)

//function with multiple argument

function greet(firstname,lastname) {
    console.log(`Good Evening, ${firstname} ${lastname}
    Hope your are having a great day!`)
}

greet('Miracle','Olowookere',)

function greet(firstname,lastname) {
    console.log(`Good Evening, ${firstname} ${lastname[0]}.
    Hope your are having a great day!`)
}

greet('Miracle','Olowookere',)

function repeat(str,numTimes){
    for(let i=0; i< numTimes; i++)
        console.log("HELLO")
}

repeat('asd', 5)

function repeat(str,numTimes){
    let result = ''
    for(let i=0; i< numTimes; i++){
         result += str;
    }   
    console.log(result);
}

repeat('TIME IS MONEY!  ', 5)


