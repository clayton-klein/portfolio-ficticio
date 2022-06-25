"use strict";

let nameInput = document.querySelector("#nome");
let emailInput = document.querySelector("#email");
let subjectInput = document.querySelector("#assunto");
let msgTextArea = document.querySelector("#mensagem");
let invalidNameSpan = document.querySelector(".js-invalid-name");
let invalidEmailSpan = document.querySelector(".js-invalid-email");
let invalidSubjectSpan = document.querySelector(".js-invalid-subject");
let invalidMsgSpan = document.querySelector(".js-invalid-msg");
let formBtn = document.querySelector(".formcontato__botao");

//fonte: https://www.w3resource.com/javascript/form/email-validation.php
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

nameInput.addEventListener("blur", (e) => {
  if (nameInput.value.length < 2 || nameInput.value.length > 50) {
    invalidNameSpan.style.visibility = "visible";
  } else {
    invalidNameSpan.style.visibility = "hidden";
  }
});

emailInput.addEventListener("blur", (e) => {
  if (!emailInput.value || !emailRegex.test(emailInput.value)) {
    invalidEmailSpan.style.visibility = "visible";
  } else {
    invalidEmailSpan.style.visibility = "hidden";
  }
});

subjectInput.addEventListener("blur", (e) => {
  if (!subjectInput.value || subjectInput.value.length > 50) {
    invalidSubjectSpan.style.visibility = "visible";
  } else {
    invalidSubjectSpan.style.visibility = "hidden";
  }
});

msgTextArea.addEventListener("blur", (e) => {
  if (!msgTextArea.value || msgTextArea.value.length > 300) {
    invalidMsgSpan.style.visibility = "visible";
  } else {
    invalidMsgSpan.style.visibility = "hidden";
  }
});

document.addEventListener('input', (e) => {
  if (
    nameInput.validity.valid &&
    emailInput.validity.valid &&
    subjectInput.validity.valid &&
    msgTextArea.validity.valid
  ) {
    formBtn.style.visibility = "visible";
  }
})
