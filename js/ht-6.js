const validationInputRef = document.querySelector("#validation-input");
validationInputRef.addEventListener("blur", handleValidationCheck);
validationInputRef.addEventListener("focus", handleValidationClassRemove);

function handleValidationCheck() {
  if (validationInputRef.value.length < validationInputRef.dataset.length) {
    console.log("invalid password");
    validationInputRef.classList.add("invalid");
    return;
  }
  validationInputRef.classList.add("valid");
}

function handleValidationClassRemove() {
  validationInputRef.classList.remove("valid");
  validationInputRef.classList.remove("invalid");
}
