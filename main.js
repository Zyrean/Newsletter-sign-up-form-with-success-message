"use strict";

// Variables
const inpEmail = document.querySelector("#inp-email-newsletter");
const btnSubscribe = document.querySelector("#btn-subscribe");
const btnDismiss = document.querySelector("#btn-dismiss");
const labelErrorEmail = document.querySelector("#label-error-email");
const containerNewsletter = document.querySelector("#newsletter-form");
const containerNewsletterThankY = document.querySelector(
  "#newsletter-form-thankyou-desk"
);
let labelUserEmail = document.querySelector("#label-user-email-desk");

let isOK = false;
let userEmail = "";

// Functions
const formatText = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase().trim();

// Check if its an actual email
const checkEmail = function (email) {
  const emailForm = formatText(email);
  const re = /\S+@\S+\.\S+/;
  return re.test(emailForm);
};

// Display error status
const showError = (labelErrorText = "Cant be empty!") => {
  labelErrorEmail.classList.remove("hidden");
  labelErrorEmail.textContent = labelErrorText;
  inpEmail.style.border = "1px solid red";
  inpEmail.style.backgroundColor = "rgba(245, 39, 39, 0.1)";
};

// Hide error status
const hideError = () => {
  labelErrorEmail.classList.add("hidden");
  inpEmail.style.border = "1px solid rgba(203, 203, 203, 0.4)";
  inpEmail.style.backgroundColor = "white";
};

// Check if input is empty or if its not an email (has no "@")
const checkInput = () => {
  if (!inpEmail.value) showError();
  else if (!checkEmail(inpEmail.value)) showError("Not an valid email!");
  else {
    isOK = true;
    userEmail = inpEmail.value;
  }
};

// If input is valid, displaying "thank you" section
const checkAll = () => {
  checkInput();
  if (isOK) {
    containerNewsletter.classList.add("hidden");
    containerNewsletterThankY.classList.remove("hidden");
    labelUserEmail.textContent = userEmail;
  }
};

// Resetting input/values/variables and displaying default "newsletter" section
const reset = () => {
  containerNewsletter.classList.remove("hidden");
  containerNewsletterThankY.classList.add("hidden");
  inpEmail.value = "";
  userEmail = "";
  isOK = false;
  hideError();
};

// Events

btnSubscribe.addEventListener("click", checkAll);

btnDismiss.addEventListener("click", reset);
