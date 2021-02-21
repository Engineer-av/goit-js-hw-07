const inputControlsRef = document.querySelector("#controls input");
const createBtnRef = document.querySelector('#controls [data-action="render"]');
const destroyBtnRef = document.querySelector(
  '#controls [data-action="destroy"]'
);
const boxesRef = document.querySelector("div#boxes");

createBtnRef.addEventListener("click", () => {
  createBoxes(inputControlsRef.value);
});
destroyBtnRef.addEventListener("click", deleteBoxes);

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    box.style.height = `${30 + i * 10}px`;
    box.style.width = `${30 + i * 10}px`;
    box.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(
      0,
      255
    )}, ${getRandom(0, 255)})`;

    function getRandom(min, max) {
      return Math.ceil(Math.random() * (max - min) + min);
    }
    boxesRef.appendChild(box);
  }
}

function deleteBoxes() {
  boxesRef.innerHTML = "";
  inputControlsRef.value = 0;
}
