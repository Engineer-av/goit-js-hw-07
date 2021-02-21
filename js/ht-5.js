const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

nameInputRef.addEventListener("input", handleOutputChange);

function handleOutputChange(event) {
  nameOutputRef.textContent = event.currentTarget.value;
  if (nameOutputRef.textContent === "") {
    nameOutputRef.textContent = "незнакомец";
  }
}
