const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  // Email validation
  if (!email.value.includes("@")) {
    showError(email, "Please enter a valid email");
    valid = false;
  } else {
    clearError(email);
  }

  // Password validation
  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    valid = false;
  } else {
    clearError(password);
  }

  // If valid, simulate success
  if (valid) {
    alert("Login successful! 🚀");
    form.reset();
  }
});

function showError(input, message) {
  const error = input.nextElementSibling;
  error.innerText = message;
  error.style.display = "block";
}

function clearError(input) {
  const error = input.nextElementSibling;
  error.innerText = "";
  error.style.display = "none";
}