// =========================
// 1. Button click message
// =========================
const helloBtn = document.getElementById("helloBtn");
const helloMsg = document.getElementById("helloMsg");

helloBtn.addEventListener("click", () => {
  helloMsg.textContent = "Hello! You clicked the button 🎉";
});

// =========================
// 2. Dark mode toggle
// =========================
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// =========================
// 3. Simple form validation
// =========================
const form = document.getElementById("simpleForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page refresh

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const formMessage = document.getElementById("formMessage");

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  formMessage.textContent = "";

  let valid = true;

  // Name check
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    valid = false;
  }

  // Email check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  }

  if (valid) {
    formMessage.textContent = "Form submitted successfully ✅";
    form.reset();
  }
});
