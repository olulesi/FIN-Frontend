// The forEach Method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function print(element) {
  console.log(element);
}
numbers.forEach(print); //, it will pass 1 to print, then 2, then 3, and so on. As a result, every element is printed out.



numbers.forEach(function (el) {
  console.log(el);
});


for (let el of numbers) {
  console.log(el);
}


numbers.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});

movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}/100`);
});


const movies = [{
    title: 'Amadeus'
    score: 99
},
    {title: 'stand by me'
     score
    }, {
    
}]