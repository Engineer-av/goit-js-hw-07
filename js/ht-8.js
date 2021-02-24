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

// function createBoxes(amount) {
//   for (let i = 1; i <= amount; i += 1) {
//     const box = document.createElement("div");
//     box.style.height = `${30 + i * 10}px`;
//     box.style.width = `${30 + i * 10}px`;
//     box.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(
//       0,
//       255
//     )}, ${getRandom(0, 255)})`;

//     function getRandom(min, max) {
//       return Math.ceil(Math.random() * (max - min) + min);
//     }
//     boxesRef.appendChild(box);
//   }
// }
function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function createBox() {
  const box = document.createElement("div");
  const lastBox = boxesRef.lastElementChild;
  box.style.height = `${
    lastBox === null ? 30 : Number.parseInt(lastBox.style.height) + 10
  }px`;
  box.style.width = `${
    lastBox === null ? 30 : Number.parseInt(lastBox.style.width) + 10
  }px`;
  box.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(
    0,
    255
  )}, ${getRandom(0, 255)})`;

  boxesRef.appendChild(box);
}

function createBoxes(amount) {
  if (+amount) {
    createBox();
    +amount--;
    createBoxes(amount);
  }
}

function deleteBoxes() {
  boxesRef.innerHTML = "";
  inputControlsRef.value = 0;
}
