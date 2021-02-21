const fontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontSizeControlRef.addEventListener("input", handleTextChange);
function handleTextChange(e) {
  textRef.style.fontSize = `${e.target.value / 2}px`;
  console.log(textRef.style.fontSize);
}
