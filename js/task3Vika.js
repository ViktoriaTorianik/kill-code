/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
const refs = {
    btnEl: document.querySelector("#passwordButton"),
    inputEl: document.querySelector("#passwordInput")
}
const { btnEl, inputEl }= refs
btnEl.addEventListener("click", onCheng)
function onCheng(){
    const inputTypeValue = inputEl.getAttribute("type")
    console.log(inputTypeValue);
    
   if(inputTypeValue === "text"){
    inputEl.setAttribute("type", "password")
    btnEl.textContent = "Розкрити"
   }
   else {
    inputEl.setAttribute("type", "text")
    btnEl.textContent = "Приховати"
   }
}
