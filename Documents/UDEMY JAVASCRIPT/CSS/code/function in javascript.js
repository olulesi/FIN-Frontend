//FUNCTION IN JAVASCRIPT














// //THE RETURN KEYWORD 
// function add (x,y){
//     let sum = x + y;
//     console.log("we are working on javascriopt")
//     return sum;
//     console.log("END OF FUNCTION")
// }

// function add (x,y) {
// if (typeof x !== "number" || 
// typeof y !== "number")
// }{
//     return false;
// }
// let sum = x + y;
// return sum;
// }



// function add (x,y) {
//     if (typeof x !== "number" || 
// typeof y !== "number"){
//       return false;
//     }
//     let sum = x + y;
//     return sum;
    
// }


// function add (x,y) {
//     if (typeof x !== "number" || 
// typeof y !== "number"){
//       return false;
//     }
//     return x + y;
    
// }


// function collectEggs(){
//     let totaleggs = 6;
// }



// let totaleggs = 0;
// function collectEggs (){
//     totaleggs = 6;
// }
// console.log(totaleggs);
// collectEggs ();
// console.log(totaleggs);


// let bird = "scarlet macaw";
// function birdwatch(){
//     // let bird = "great blue heron";
//     console.log(bird);
// }
// birdwatch()


// // BLOCK SCOPE
// let radius = 8;
// if (radius > 8){
//     const PI = 3.14159;
//     let msg = "HELLO!"
// }

// console.log(radius);
// console.log(PI)


// let radius = 8;
// if (radius > 8){
//     const PI = 3.14159;
//     let msg = "HELLO!"
// }

// console.log(radius);
// console.log(msg)


// for (let i = 0; i< 5; i++){
//     let msg = "ASKLDJAKLSS";
//     console.log(msg)
// }
//     console.log(msg)



//     for (let i = 0; i< 5; i++){
//     var msg = "ASKLDJAKLSS";
//     console.log(msg)
// }
//     console.log(msg)



//     for (var i = 0; i< 5; i++){
//     var msg = "ASKLDJAKLSS";
//     console.log(msg)
// }
//     console.log(msg)
//     console.log(i)


//      for (let i = 0; i < 5; i++){
//     let msg = "ASKLDJAKLSS";
//     console.log(msg)
// }
//     console.log(msg)
//     console.log(i)


// LEXICAL SCOPE

// function bankRobbery(){
//     const Heroes = ['spiderman','wolverine','Black panther','Blackwoman']
//     function cryForHelp(){
//         for (let hero of Heroes){
//             console.logn(`PLEASE HELP US, ${hero.toUpperCase}`)
//         }
//    }
   
// }



function bankRobbery() {
    const Heroes = ['spiderman','wolverine','Black panther','Blackwoman']
    function cryForHelp() {
        for (let hero of Heroes){
            console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
        }
   }
   cryForHelp();
}



function bankRobbery() {
    const Heroes = ['spiderman','wolverine','Black panther','Blackwoman']
    function cryForHelp() {
        function inner (){
            for (let hero of Heroes){
            console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
          }

       }
       inner();
   }
   cryForHelp();
}













