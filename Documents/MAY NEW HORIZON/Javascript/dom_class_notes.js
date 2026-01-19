
// ==============================
// DOM Manipulation, Traversal & Events - Class Notes
// ==============================

// ------------------------------
// 1. DOM Selection
// ------------------------------

// Selecting elements by ID
const heading = document.getElementById('heading'); // Selects an element with id="heading"

// Selecting elements by class name (returns HTMLCollection)
const items = document.getElementsByClassName('item'); // Selects all elements with class="item"

// Selecting elements by tag name (returns HTMLCollection)
const listItems = document.getElementsByTagName('li'); // Selects all <li> elements

// Using querySelector (selects the first match)
const firstParagraph = document.querySelector('p'); // Selects the first <p> element

// Using querySelectorAll (selects all matches - returns NodeList)
const allParagraphs = document.querySelectorAll('p'); // Selects all <p> elements


// ------------------------------
// 2. DOM Manipulation
// ------------------------------

// Changing text content
 heading.textContent = "New Heading Text";

// Changing HTML content (be careful, can insert HTML tags)

heading.innerHTML = "<em>Italic Heading</em>";


// Changing styles

heading.style.color = "blue";
heading.style.backgroundColor = "yellow";


// Working with attributes

const link = document.querySelector('a');
link.setAttribute('href', 'https://example.com');
console.log(link.getAttribute('href'));
link.removeAttribute('target');


// Working with classes

heading.classList.add('highlight');
heading.classList.remove('highlight');
heading.classList.toggle('highlight'); // Toggles the class on/off



// ------------------------------
// 3. DOM Traversal
// ------------------------------

// parentElement

const list = document.querySelector('ul');
console.log(list.parentElement); // The parent element of the <ul>


// children

console.log(list.children); // HTMLCollection of all direct children


// firstElementChild & lastElementChild

console.log(list.firstElementChild);
console.log(list.lastElementChild);


// nextElementSibling & previousElementSibling

const firstItem = list.firstElementChild;
console.log(firstItem.nextElementSibling); // The <li> after the first
console.log(firstItem.previousElementSibling); // null if it's the first item



// ------------------------------
// 4. Creating & Removing Elements
// ------------------------------

// Creating a new element

const newDiv = document.createElement('div');
newDiv.textContent = "I am new here!";
document.body.appendChild(newDiv); // Adds the new div at the end of the body


// Removing an element

newDiv.remove(); // Removes the newDiv from the DOM



// ------------------------------
// 5. Events & Event Listeners
// ------------------------------

// Adding a click event

const btn = document.querySelector('#clickMe');
btn.addEventListener('click', () => {
  alert('Button clicked!');
});


// Accessing the event object

btn.addEventListener('click', function(e) {
  console.log(e.target); // The element that was clicked
});


// Preventing default behaviour (e.g., form submit)

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('Form submitted without page reload!');
});


// End of class notes
