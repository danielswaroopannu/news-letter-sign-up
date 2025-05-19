const form = document.querySelector(".form-block");
const container = document.querySelector(".container");
const successMessage = document.querySelector(".success-message");
const userEmailSpan = document.querySelector(".user-email");
const dismissBtn = document.querySelector(".dismiss-btn");
const emailInput = document.querySelector('input[type = "text"]');
const errorMessage = document.querySelector(".error-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();

  errorMessage.style.display = "none";
  errorMessage.textContent = "";

  if (emailValue === "") {
    errorMessage.textContent = "Please enter your email";
    errorMessage.style.display = "block";
    return;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailValue)) {
    errorMessage.textContent = "Valid email required";
    errorMessage.style.display = "block";
    return;
  }

  userEmailSpan.textContent = emailValue;

  container.style.display = "none";
  successMessage.style.display = "block";

  console.log(
    "Thanks for subscribing! A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription. Dismiss message"
  );
});

dismissBtn.addEventListener("click", () => {
    successMessage.style.display = "none"
    container.style.display = "flex";
    emailInput.value = "";
    emailInput.focus();
    errorMessage.style.display = "none";
    errorMessage.textContent = "";
});
