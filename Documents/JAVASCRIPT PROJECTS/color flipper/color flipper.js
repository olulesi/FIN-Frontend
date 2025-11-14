// Select elements
const btn = document.getElementById("btn");
const colorText = document.getElementById("color");

// Add event listener
btn.addEventListener("click", function() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
  colorText.style.color = randomColor;
});

// Function to generate random hex color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
