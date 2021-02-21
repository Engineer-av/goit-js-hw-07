const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const resultRef = document.querySelector("#value");

let counterValue = 0;

const increment = () => {
  resultRef.textContent = counterValue += 1;
};
const decrement = () => {
  resultRef.textContent = counterValue -= 1;
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
