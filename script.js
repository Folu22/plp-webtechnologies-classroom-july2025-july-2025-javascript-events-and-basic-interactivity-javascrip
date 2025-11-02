// =========================
// Part 1: Event Handling - Counter
// =========================
const countDisplay = document.getElementById('countDisplay');
let count = 0;

document.getElementById('incrementBtn').addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

document.getElementById('decrementBtn').addEventListener('click', () => {
  count--;
  countDisplay.textContent = count;
});

document.getElementById('resetBtn').addEventListener('click', () => {
  count = 0;
  countDisplay.textContent = count;
});

// =========================
// Part 2: Interactive Elements - FAQ + Mode Toggle
// =========================
document.getElementById('modeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Toggle FAQ answers
const questions = document.querySelectorAll('.question');
questions.forEach(q => {
  q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});

// =========================
// Part 3: Form Validation
// =========================
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Input elements
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Error elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const successMessage = document.getElementById('successMessage');

  // Reset messages
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  successMessage.textContent = '';

  let valid = true;

  // Validate name
  if (name === '') {
    nameError.textContent = 'Name is required';
    valid = false;
  }

  // Validate email (regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = 'Enter a valid email address';
    valid = false;
  }

  // Validate password
  if (password.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters long';
    valid = false;
  }

  // Success
  if (valid) {
    successMessage.textContent = '✅ Form submitted successfully!';
    document.getElementById('registerForm').reset();
  }
});
