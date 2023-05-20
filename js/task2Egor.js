/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
const refs = {
  btnEl: document.querySelector("#swapButton"),
  inputLeftEl: document.querySelector("#leftSwapInput"),
  inputRightEl: document.querySelector("#rightSwapInput"),
};
const { btnEl, inputLeftEl, inputRightEl } = refs;

btnEl.addEventListener("click", onReverseInput);
function onReverseInput() {
  const leftValue = inputLeftEl.value;
  const rightValue = inputRightEl.value;
  inputLeftEl.value = rightValue;
  inputRightEl.value = leftValue;
}
