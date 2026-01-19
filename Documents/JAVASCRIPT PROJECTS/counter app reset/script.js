// Select elements
const count = document.getElementById("count");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");

// Set initial count
let counter = 0;

// Event Listeners
increaseBtn.addEventListener("click", function() {
    counter++;
    updateCount();
});

decreaseBtn.addEventListener("click", function() {
    counter--;
    updateCount();
});

resetBtn.addEventListener("click", function() {
    counter = 0;
    updateCount();
});

// Update display
function updateCount() {
    count.textContent = counter;

    if (counter > 0) {
        count.style.color = "lightgreen";
    } else if (counter < 0) {
        count.style.color = "red";
    } else {
        count.style.color = "white";
    }
}
