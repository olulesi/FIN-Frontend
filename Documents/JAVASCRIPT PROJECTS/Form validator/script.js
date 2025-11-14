// Get elements
const form = document.getElementById("signup-form");
const submitBtn = document.getElementById("submit-btn");
const successMsg = document.getElementById("form-success");

// fields
const fields = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  password: document.getElementById("password"),
  confirm: document.getElementById("confirm"),
  age: document.getElementById("age"),
  website: document.getElementById("website"),
  bio: document.getElementById("bio"),
};

// error containers
const errors = {
  name: document.getElementById("name-error"),
  email: document.getElementById("email-error"),
  phone: document.getElementById("phone-error"),
  password: document.getElementById("password-error"),
  confirm: document.getElementById("confirm-error"),
  age: document.getElementById("age-error"),
  website: document.getElementById("website-error"),
  bio: document.getElementById("bio-error"),
};

// --- Validation helpers (regex + checks) ---
function isFilled(value) {
  return value.trim().length > 0;
}

function isValidEmail(email) {
  // simple-but-practical regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  if (!phone) return true; // optional
  // Accepts international formats starting + or digits; allow spaces or dashes
  return /^\+?[\d\s\-]{7,20}$/.test(phone);
}

function isStrongPassword(pw) {
  // Minimum 8 chars, at least 1 lower, 1 upper, 1 number
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(pw);
}

function isValidURL(url) {
  if (!url) return true; // optional
  try {
    const u = new URL(url);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch (e) {
    return false;
  }
}

function showError(fieldName, message) {
  const el = fields[fieldName];
  el.classList.remove("success");
  el.classList.add("invalid");
  el.setAttribute("aria-invalid", "true");
  errors[fieldName].textContent = message;
}

function showSuccess(fieldName) {
  const el = fields[fieldName];
  el.classList.remove("invalid");
  el.classList.add("success");
  el.setAttribute("aria-invalid", "false");
  errors[fieldName].textContent = "";
}

function clearFieldState(fieldName) {
  const el = fields[fieldName];
  el.classList.remove("invalid", "success");
  el.removeAttribute("aria-invalid");
  errors[fieldName].textContent = "";
}

// Validate single field, return true if valid
function validateField(fieldName) {
  const value = (fields[fieldName].value || "").trim();

  switch (fieldName) {
    case "name":
      if (!isFilled(value)) {
        showError("name", "Please enter your full name.");
        return false;
      }
      showSuccess("name");
      return true;

    case "email":
      if (!isFilled(value) || !isValidEmail(value)) {
        showError("email", "Please enter a valid email address.");
        return false;
      }
      showSuccess("email");
      return true;

    case "phone":
      if (!isValidPhone(value)) {
        showError("phone", "Please enter a valid phone number (or leave blank).");
        return false;
      }
      showSuccess("phone");
      return true;

    case "password":
      if (!isStrongPassword(value)) {
        showError("password", "Password must be ≥8 chars and include upper, lower & a number.");
        return false;
      }
      showSuccess("password");
      return true;

    case "confirm":
      if (value !== fields.password.value) {
        showError("confirm", "Passwords do not match.");
        return false;
      }
      showSuccess("confirm");
      return true;

    case "age":
      const n = Number(value);
      if (!isFinite(n) || n < 13 || n > 120) {
        showError("age", "Enter a valid age (13–120).");
        return false;
      }
      showSuccess("age");
      return true;

    case "website":
      if (!isValidURL(value)) {
        showError("website", "Enter a valid website URL (https://...).");
        return false;
      }
      showSuccess("website");
      return true;

    case "bio":
      if (value.length > 300) {
        showError("bio", "Bio must be 300 characters or fewer.");
        return false;
      }
      showSuccess("bio");
      return true;

    default:
      return true;
  }
}

// Validate the entire form, returns boolean
function validateForm() {
  let ok = true;
  Object.keys(fields).forEach((k) => {
    const valid = validateField(k);
    if (!valid) ok = false;
  });
  return ok;
}

// --- live validation: debounce to avoid excessive checks ---
function debounce(fn, wait = 300) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

const liveValidate = debounce((e) => {
  const name = e.target.id;
  // only validate fields that are currently in our map
  if (fields[name]) validateField(name);
}, 250);

// attach live validation
Object.values(fields).forEach((el) => {
  el.addEventListener("input", liveValidate);
  // clear error on focus
  el.addEventListener("focus", () => {
    const key = el.id;
    errors[key].textContent = "";
  });
});

// Submit handler
form.addEventListener("submit", (e) => {
  e.preventDefault();
  successMsg.textContent = "";
  // run full validation
  const ok = validateForm();
  if (!ok) {
    successMsg.textContent = "";
    // focus the first invalid field
    const firstInvalid = document.querySelector(".invalid");
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  // form valid -> simulate "submit"
  successMsg.textContent = "Account created ✅ — (simulated).";
  // optionally: create a data object
  const data = {};
  Object.keys(fields).forEach(k => data[k] = fields[k].value.trim());
  console.log("SUBMIT (simulated):", data);

  // reset visual states after success (optional)
  setTimeout(() => {
    form.reset();
    Object.keys(fields).forEach(clearFieldState);
    successMsg.textContent = "";
  }, 1800);
});
